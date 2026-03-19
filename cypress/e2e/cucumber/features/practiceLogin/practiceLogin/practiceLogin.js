import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../../../../support/pages/practiceLogin.page';

// ---------- Background ----------

Given('I open the login page', () => {
    LoginPage.visit();
});

// ---------- Login scenario ----------
When('I login as a valid user', () => {
    LoginPage.login(Cypress.env('PRACTICE_USER'), Cypress.env('PRACTICE_PASS'));
});

When('I login with username {string} and password {string}',
    (username, password) => {
        LoginPage.login(username, password);
    }
);

Then('I should see that I am logged in', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/secure`);
    LoginPage.getPopUp().should('contain.text', 'You logged into a secure area!');
});

Then('I should see an invalid credentials error', () => {
    LoginPage.getPopUp().should('contain.text', 'Your password is invalid!');
});

// ---------- Unauthenticated access ----------

When('I open the secure page directly', () => {
    cy.visit('/secure');
});

Then('I should be on the login page', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
    LoginPage.getUsername().should('be.visible');
    LoginPage.getPopUp().should('contain.text', 'You must login to view the secure area!');
});

// ---------- Logout scenario ----------

Given('I am logged in as a valid user', () => {
    cy.login(Cypress.env('PRACTICE_USER'), Cypress.env('PRACTICE_PASS'));
    cy.visit('/secure');
});

When('I log out', () => {
    LoginPage.getLogoutBtn().click();
});

Then('I should be logged out', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/login`);
    LoginPage.getPopUp().should('contain.text', 'You logged out of the secure area!');
});