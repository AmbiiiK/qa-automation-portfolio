// AE API returns text/html content-type despite JSON body — manual parse required
describe('Automation Exercise API', () => {
    it('should return a non-empty list of products with valid response structure', () => {
        cy.api('GET', '/api/productsList').should((response) => {
            expect(response.status).to.eq(200);
            const body = JSON.parse(response.body);
            expect(body).to.have.property('responseCode', 200);
            expect(body.products).to.be.an('array').and.not.be.empty;
        });
    });

    it('should return a non-empty list of brands with valid response structure', () => {
        cy.api('GET', '/api/brandsList').should((response) => {
            expect(response.status).to.eq(200);
            const body = JSON.parse(response.body);
            expect(body).to.have.property('responseCode', 200);
            expect(body.brands).to.be.an('array').and.not.be.empty;
        });
    });

    it('should return correct user detail when valid email is provided', () => {
        cy.api('GET', `/api/getUserDetailByEmail?email=${Cypress.env('AE_USER')}`).should((response) => {
            expect(response.status).to.eq(200);
            const body = JSON.parse(response.body);
            expect(body).to.have.property('responseCode', 200);
            expect(body.user).to.include.keys('id', 'name', 'email');
            expect(body.user.email).to.eq(Cypress.env('AE_USER'));
        });
    });
});
