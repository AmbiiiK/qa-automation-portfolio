import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AeLoginPage from '../../../../../support/pages/aeLogin.page';

const AE_USERNAME = Cypress.env('AE_USER');
const AE_PASSWORD = Cypress.env('AE_PASS');

Given('I open the AE login page', () => {
    AeLoginPage.visit();
});

When('I login to AE as a valid user', () => {
    AeLoginPage.login(AE_USERNAME, AE_PASSWORD);
});

When(
    'I login to AE with email {string} and password {string}',
    (email, password) => {
        AeLoginPage.login(email, password);
    }
);

Then('I should see that I am logged in to AE', () => {
    cy.url().should('not.include', '/login');
    cy.contains('a', ' Logged in as ').should('be.visible');
});

Then('I should see an AE invalid credentials error', () => {
    AeLoginPage.getErrorAlert().should('be.visible');
});