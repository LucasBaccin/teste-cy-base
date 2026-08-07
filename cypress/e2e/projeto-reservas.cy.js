describe('Funcionalidade: Administrar Reservas de livros', () => {

    beforeEach(() => {
        //cy.loginApp(Cypress.env('USER_EMAIL'), Cypress.env('USER_SENHA'))
        //cy.loginToken(Cypress.env('TOKEN_USER'))
        //cy.loginToken(Cypress.env('TOKEN_ADMIN'))

    });

    it('Deve fazer login com sucesso com usuário comum - Intercept', () => {
        cy.intercept('POST', 'api/login',
            {
                statusCode: 200,
                body: {
                    token: 'token123',
                    name: 'Lucas Baccin'
                }
            }).as('loginMock')
        cy.login('usuario@usuario.com', 'testeuser123')
        cy.wait('@loginMock')
        cy.get('h4').should('contain', 'Olá')
    })

    it('Deve fazer login com sucesso com usuário comum - comando customizado', () => {
        cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_SENHA'))
        cy.get('h4').should('contain', 'Olá')
    })

    it('Deve fazer login com sucesso com usuário admin - comando customizado', () => {
        cy.login(Cypress.env('ADMIN_EMAIL'), Cypress.env('ADMIN_SENHA'))
        cy.get('h1').should('contain', 'Painel Administrativo')
    })

    it('Deve exibir as reservas via intercept', () => {
        cy.fixture('reservas').then((livrosReservados) => {
            cy.intercept('GET', 'api/reservations', {
                statusCode: 304,
                body: livrosReservados
            }).as('listaReservas')
            cy.loginApp(Cypress.env('USER_EMAIL'), Cypress.env('USER_SENHA'))
            cy.visit('dashboard.html')
            cy.wait('@listaReservas')
        })
    });

    it('Deve simular um erro do servidor - Intercept', () => {
        cy.intercept('POST', 'api/login', {
            statusCode: 500,
        }).as('erroServer')
        cy.login('usuario@teste.com', 'user123', false)
        cy.wait('@erroServer')
        cy.get('#alert-container').should('contain', 'Erro de conexão. Tente novamente.')
    })

    it('Deve simular um erro de dados inválidos - Intercept', () => {
        cy.intercept('POST', 'api/login', {
            statusCode: 400, body: { erro: 'erro do cliente' }
        }).as('erroCliente')
        cy.login('usuario@teste.com', 'user123', false)
        cy.wait('@erroCliente')
        cy.get('#alert-container').should('contain', 'Erro ao fazer login')
    })

    it('Deve simular um erro de credenciais inválidas - Intercept', () => {
        cy.intercept('POST', 'api/login', {
            statusCode: 401, body: { erro: 'erro do cliente' }
        }).as('erroCliente')
        cy.login('usuario@teste.com', 'user123', false)
        cy.wait('@erroCliente')
        cy.get('#alert-container').should('contain', 'Erro ao fazer login')
    })//Deve selecionar o token inválido (admin nesse caso) antes de executar o teste
})