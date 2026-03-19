class AeLoginPage {
    visit() {
        cy.visit('/login');
    }

    // data-qa attributes used — application does not provide data-cy/data-testid
    getEmail() {
        return cy.get('input[data-qa="login-email"]');
    }

    getPassword() {
        return cy.get('[data-qa="login-password"]');
    }

    getSubmitBtn() {
        return cy.get('[data-qa="login-button"]');
    }

    getErrorAlert() {
        // No data-qa on error element — third-party app; text used as selector
        return cy.contains('p', 'Your email or password is incorrect!');
    }

    login(email, password) {
        this.getEmail().clear().type(email);
        this.getPassword().clear().type(password);
        this.getSubmitBtn().click();
    }
}

export default new AeLoginPage();
