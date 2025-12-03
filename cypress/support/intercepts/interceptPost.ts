export const interceptPost = () => {
    cy.intercept('POST', 'api/searchProduct/*').as('SearchProductPOST');
    cy.intercept('POST', 'api/verifyLogin/*').as('VerifyLoginPOST');
};