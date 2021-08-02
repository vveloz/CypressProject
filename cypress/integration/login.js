import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


Given('un usuario ingresa a la pagina Linio', () => {
    cy.visit('/').wait(15000);
})


When('ingresa {string} y {string} correctos', (email, pass) => {
    cy.fixture('ObjectRepository')
        .then((ObjectRepository) => {
            cy.get(ObjectRepository.IniciarSesionIcon).click(),
            cy.get(ObjectRepository.iniciarSesionLbl).click(),
            cy.get(ObjectRepository.emailInput).type(email),
            cy.get(ObjectRepository.passInput).type(pass)
        })
    
})

Then('se muestra el mensaje de bienvenida', () => {
    //cy.get(ObjectRepository., { timeout: 20000 }).contains(option).click();
})