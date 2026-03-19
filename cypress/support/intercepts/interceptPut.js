export const interceptPut = () => {
    cy.intercept('PUT', '/notes/api/notes/*').as('NoteUpdatePUT');
};