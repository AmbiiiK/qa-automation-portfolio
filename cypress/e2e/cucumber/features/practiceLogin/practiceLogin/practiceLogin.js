import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../../../pageObjects/practiceLogin.page';

// ---------- Background ----------

Given('I open the login page', () => {
    LoginPage.visit();
});

// ---------- Login scenario ----------
When('I login with username {string} and password {string}',
    (username, password) => {
        LoginPage.login(username, password);
    }
);

Then('I should see that I am logged in', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/secure`);
    LoginPage.popUp().should('contain.text', 'You logged into a secure area!');
});

Then('I should see an invalid credentials error', () => {
    LoginPage.popUp().should('contain.text', 'Your password is invalid!');
});

// ---------- Unauthenticated access ----------

When('I open the secure page directly', () => {
    cy.visit('/secure');
});

Then('I should be on the login page', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
    LoginPage.username().should('be.visible');
    LoginPage.popUp().should('contain.text', 'You must login to view the secure area!');
});

// ---------- Logout scenario ----------

Given(
    'I am logged in as {string} with password {string}',
    (username, password) => {
        LoginPage.visit();
        LoginPage.login(username, password);
        cy.url().should('eq', `${Cypress.config('baseUrl')}/secure`);
    }
);

When('I log out', () => {
    LoginPage.logoutBtn().click();
});

Then('I should be logged out', () => {
    LoginPage.assertLoggedOut();
});