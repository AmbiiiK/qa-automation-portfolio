import './commands';
import 'cypress-plugin-api';
import 'cypress-mochawesome-reporter/register';

import { interceptPost } from './intercepts/interceptPost';
import { interceptGet } from './intercepts/interceptGet';
import { interceptPut } from './intercepts/interceptPut';
import { interceptDelete } from './intercepts/interceptDelete';

beforeEach(function () {
    interceptPost();
    interceptGet();
    interceptPut();
    interceptDelete();
});
