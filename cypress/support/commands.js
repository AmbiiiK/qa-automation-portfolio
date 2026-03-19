// Custom Cypress commands

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/login');
        cy.get('[id="username"]').type(username);
        cy.get('[id="password"]').type(password);
        cy.get('[id="submit-login"]').click();
        cy.url().should('include', '/secure');
    });
});
