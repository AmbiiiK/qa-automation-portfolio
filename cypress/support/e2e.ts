//Import custom commands:
import './commands';
import 'cypress-plugin-api';
import 'cypress-mochawesome-reporter/register';
//import './commands_ant';
//import './commands_cucumber';
//import './commands_api';

//Import users fixtures
//import { default as users } from '../fixtures/users';

//Import cy.intercept('');
import { interceptPost } from './intercepts/interceptPost';
import { interceptGet } from './intercepts/interceptGet';
import { interceptPut } from './intercepts/interceptPut';
import { interceptDelete } from './intercepts/interceptDelete';

beforeEach(function () {
    // Intercept API calls
    interceptPost();
    interceptGet();
    interceptPut();
    interceptDelete();
});