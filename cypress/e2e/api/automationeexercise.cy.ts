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
});