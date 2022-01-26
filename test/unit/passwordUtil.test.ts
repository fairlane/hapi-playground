import PasswordUtil from '../../src/util/PasswordUtil';
import { expect } from 'chai';

describe('Password encrypt', () => {
  it('password should be encrypted', () => {
    const result = PasswordUtil.encrypt('test-pass');
    expect(result).to.equal('f620a22eed424fb31566a904250ac277ec9de7ae1be5e485b29a0ee2f505d69b');
  });
});

describe('Generate random string', () => {
  it('random string should be generated', () => {
    const result = PasswordUtil.generateRandomPassword(32);
    expect(result).to.have.lengthOf(32);
  });
});