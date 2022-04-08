// Import das Pages
import login from '../../support/pages/login'

/// <reference types = "Cypress" />

context('Iniciando testes', () => {

    //Antes do teste faça..
    it.only('Login no Sistema', () => {
        login.acessAndValidateLoginPage();
    });



    it('Login no Sistema', () => {
        login.logIntoTheSystem();
    });


})