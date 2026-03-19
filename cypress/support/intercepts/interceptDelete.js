export const interceptDelete = () => {
    cy.intercept('DELETE', 'api/deleteAccount/*').as('AccountDELETE');
};