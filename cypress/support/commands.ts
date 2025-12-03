import type { Interceptors } from './@types/interceptors';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Type to autocomplete interceptors from interceptors.d.ts file
             * @example cy.wait('@test')
             */
            wait(input: Interceptors): void;
        }
    }
}