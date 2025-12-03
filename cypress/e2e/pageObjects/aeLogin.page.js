class AeLoginPage {
    visit() {
        cy.visit('/login');
    }

    email() {
        return cy.get('input[data-qa="login-email"]');
    }

    password() {
        return cy.get('[data-qa="login-password"]');
    }

    submitBtn() {
        return cy.get('[data-qa="login-button"]');
    }

    errorAlert() {
        return cy.contains('p', 'Your email or password is incorrect!');
    }

    login(email, password) {
        this.email().clear().type(email);
        this.password().clear().type(password);
        this.submitBtn().click();
    }
}

export default new AeLoginPage();