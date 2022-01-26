import PasswordUtil from '../../src/util/PasswordUtil';
import { expect } from 'chai';

describe('Password encrypt', () => {
  it('password should be encrypted', () => {
    const result = PasswordUtil.encrypt('test-pass');
    expect(result).to.equal('7e5ef15ae28693ae3881379a71c97b54dffc82171b5efc0813c51993d05ded59');
  });
});

describe('Generate random string', () => {
  it('random string should be generated', () => {
    const result = PasswordUtil.generateRandomPassword(32);
    expect(result).to.have.lengthOf(32);
  });
});