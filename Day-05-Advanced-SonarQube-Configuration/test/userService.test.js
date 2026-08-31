const { getUserById, hashPassword } = require('../src/userService');

describe('userService', () => {
  test('getUserById returns correct user', () => {
    expect(getUserById(1)).toEqual({ id: 1, name: 'Alice' });
  });

  test('hashPassword returns a hash', () => {
    expect(hashPassword('secret')).toHaveLength(32);
  });
});