describe('API testing via cypress', () => {
    it('API 1 - Get all products (relative url)', () => {
        cy.api('GET', '/api/productsList').should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('API 2 - Get all brands list (relative url)', () => {
            cy.api('GET', '/api/brandsList').should((response) => {
                expect(response.status).to.eq(200);
            });
        });

    it('API 3 - Get all brands list (relative url)', () => {
        cy.api('GET', '/api/getUserDetailByEmail').should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});