describe('API testing via cypress', () => {
    const apiTests = [
        { name: 'Get all products', url: '/api/productsList' },
        { name: 'Get all brands list', url: '/api/brandsList' },
        { name: 'Get user detail by email', url: '/api/getUserDetailByEmail' },
    ];

    apiTests.forEach(({ name, url }) => {
        it(`${name} (relative url)`, () => {
            cy.api('GET', url).should((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });
});
