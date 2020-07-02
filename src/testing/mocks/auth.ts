import { User } from '@modules/auth/models';
export { User };

export class MockUser implements User {
    id = 'TEST_ID';
    email = 'TEST_EMAIL';
    password = '123456';
    confirmPassword = '123456';
}
