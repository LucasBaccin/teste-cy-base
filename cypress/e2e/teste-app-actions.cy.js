/// <reference types="cypress" />

//Modelo de estudo

/*describe('Login no hub de leitura', () => {

    beforeEach(() => {
        cy.visit('login.html')
        cy.setCookie('jwt_education_shown', 'true')
    });

    /*it.('Deve fazer login com sucesso com usuário comum - com API', () => {
        cy.request({
            method: 'POST',
            url: 'api/login',
            body: {
                email: 'usuario@teste.com',
                password: 'user123'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            //App actions - Criar o estado da aplicação
            window.localStorage.setItem('authToken', response.body.token)
            window.localStorage.setItem('isAdmin', false)
            window.localStorage.setItem('userId', response.body.id)
            window.localStorage.setItem('userName', 'Lucas Baccin')
            cy.visit('dashboard.html')
            cy.get('h4').should('contain', 'Olá')
        })
    });
    //Teste com mais manipulação, já que podemos criar um estado da aplicação

    it('Deve fazer login com sucesso com usuário comum - com token', () => {
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c3VhcmlvQHRlc3RlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3ODU0NDcyMjUsImV4cCI6MTc4NTQ3NjAyNX0.qIBwuqQ-zomUgXt14FP1nOXzukJnKrwo5JJFwLTB2SE"
        window.localStorage.setItem('authToken', token)
        cy.visit('dashboard.html')
        cy.get('h4').should('contain', 'Olá')
    });
    //Teste muito mais rápido, já que não precisa passar os dados completos da API;

    it('Deve fazer login com sucesso com usuário admin', () => {
        cy.setCookie('jwt_education_shown', 'true') //Metodo de aceitar o popup de cookies
        cy.login('admin@biblioteca.com', 'admin123')
        cy.get('h1').should('contain', 'Painel Administrativo')
    });

    it.skip('Deve mudar o idioma do site via cookies', () => {
        cy.visit('https://lms.ebaconline.com.br/')
        cy.setCookie('i18n_redirect', 'en')
    });//Teste de trocar idioma direto nos cookies
})
*/