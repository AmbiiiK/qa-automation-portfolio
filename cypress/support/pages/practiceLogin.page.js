class PracticeLoginPage {
    visit() {
        cy.visit('/login')
    }

    getUsername() {
        return cy.get('[id="username"]')
    }
    getPassword() {
        return cy.get('[id="password"]')
    }
    getSubmitBtn() {
        return cy.get('[id="submit-login"]')
    }
    getPopUp() {
        return cy.get('[id="flash"]')
    }
    getLogoutBtn() {
        return cy.contains('Logout')
    }

    login(username, password) {
        this.getUsername().clear().type(username);
        this.getPassword().clear().type(password);
        this.getSubmitBtn().click();
    }

}

export default new PracticeLoginPage();
