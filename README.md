# 🧪 QA E2E Testing Lab — Cypress

Projeto de automação de testes desenvolvido com **Cypress**, voltado à prática de testes End-to-End, interceptação de requisições e integração de testes automatizados em um pipeline de CI.

O projeto foi iniciado durante o curso de Engenharia de Qualidade de Software da EBAC e posteriormente expandido como parte do meu portfólio de QA, incorporando ferramentas de relatório, CI e monitoramento das execuções.

## 🎯 Objetivos

- Automatizar fluxos críticos de uma aplicação web;
- Validar cenários positivos e negativos;
- Utilizar `cy.intercept()` para interceptação e simulação de respostas da API;
- Praticar estratégias de testes E2E;
- Executar os testes automaticamente através de CI;
- Gerar relatórios e acompanhar métricas das execuções.

## 🛠️ Tecnologias e ferramentas

- **Cypress** — automação dos testes E2E;
- **JavaScript** — implementação dos testes;
- **GitHub Actions** — execução automatizada no pipeline de CI;
- **Cypress Cloud** — acompanhamento das execuções e métricas dos testes;
- **Allure Reports** — geração de relatórios detalhados;
- **Node.js / npm** — ambiente e gerenciamento de dependências.

## 🧪 Cobertura dos testes

A suíte contempla cenários como:

- Fluxos funcionais da aplicação;
- Validação de login;
- Cenários positivos e negativos;
- Interceptação de requisições com `cy.intercept()`;
- Simulação de respostas HTTP de sucesso e erro;
- Validação do comportamento da aplicação diante de falhas da API.

## 📁 Estrutura do projeto

cypress/
├── e2e/          # Casos de teste
├── fixtures/     # Massa de dados
└── support/      # Configurações e comandos de suporte

.github/
└── workflows/    # Pipeline de CI com GitHub Actions

## 🚀 Executando localmente

### 1. Clone o repositório

git clone https://github.com/LucasBaccin/teste-cy-base.git
cd teste-cy-base

### 2. Instale as dependências

npm install

### 3. Execute em modo interativo

npx cypress open

Ou execute em modo headless:

npx cypress run

> Os testes dependem da aplicação Hub de Leitura disponível em `localhost:3000`.

## ⚙️ Integração contínua

O projeto utiliza **GitHub Actions** para automatizar o processo de testes.

Durante o pipeline:

1. O repositório de testes é carregado;
2. A aplicação Hub de Leitura é preparada e iniciada;
3. O pipeline aguarda a aplicação ficar disponível;
4. A suíte Cypress é executada;
5. Os resultados são registrados no Cypress Cloud;
6. O relatório Allure é gerado e publicado.

## ☁️ Cypress Cloud

As execuções automatizadas são registradas no **Cypress Cloud**, permitindo acompanhar métricas como:

- duração das execuções;
- quantidade de testes executados;
- testes aprovados e reprovados;
- histórico de execuções;
- comportamento das specs ao longo do pipeline.

A integração utiliza `CYPRESS_RECORD_KEY` armazenada de forma segura através dos **GitHub Actions Secrets**, evitando a exposição da credencial no repositório.

## 📊 Allure Reports

Além das métricas disponibilizadas pelo Cypress Cloud, o projeto utiliza **Allure Reports** para geração de relatórios das execuções, facilitando a análise dos resultados e das evidências dos testes.

## 📚 Contexto

Projeto originalmente desenvolvido como atividade prática do curso de **Engenharia de Qualidade de Software — EBAC** e posteriormente aprimorado para aplicação de conceitos e ferramentas utilizadas em ambientes reais de QA.

As melhorias posteriores incluem CI com GitHub Actions, Allure Reports e integração com Cypress Cloud.

## 👨‍💻 Autor

**Lucas Baccin**

QA | Quality Assurance | Test Automation