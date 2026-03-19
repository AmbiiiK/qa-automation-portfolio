export const interceptGet = () => {
    // USERS
    cy.intercept('GET', '/notes/api/users/profile').as('UsersProfileGET');

    // NOTES
    cy.intercept('GET', '/notes/api/notes').as('NotesListGET');      // GET /notes
    cy.intercept('GET', '/notes/api/notes/*').as('NoteDetailGET');   // GET /notes/{id}
    cy.intercept('GET', 'api/productsList/*').as('GetAllBrandsList');
    cy.intercept('GET', 'api/brandsList/*').as('BrandsListGET');
    cy.intercept('GET', 'api/getUserDetailByEmail/*').as('UserDetailByEmailGET');

};
