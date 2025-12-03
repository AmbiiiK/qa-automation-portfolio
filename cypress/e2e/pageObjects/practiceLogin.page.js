import Page from './page'

class PracticeLoginPage extends Page {
    visit() {
        cy.visit('/login')
    }

    username() {
        return cy.get('[id="username"]')
    }
    password() {
        return cy.get('[id="password"]')
    }
    submitBtn() {
        return cy.get('[id="submit-login"]')
    }
    popUp() {
        return cy.get('[id="flash"]')
    }
    logoutBtn() {
        return cy.get('[class="button secondary radius btn btn-danger"]')
    }

    login(username, password) {
        this.username().clear().type(username);
        this.password().clear().type(password);
        this.submitBtn().click();
    }

    assertLoggedOut() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
        this.popUp().should('contain.text', 'You logged out of the secure area!');
    }

}


export default new PracticeLoginPage();