'use strict';

const Lab = require('@hapi/lab');
const { encryptString } = require("../../dist/util/PasswordUtil");
const { expect } = require('@hapi/code');
const { describe, it } = exports.lab = Lab.script();

describe('Password is encrypted', () => {
  it('encrypts', async () => {
    const pass = encryptString('test-pass', 'test-salt');
    expect(pass).equal('7e5ef15ae28693ae3881379a71c97b54dffc82171b5efc0813c51993d05ded59');
  })
});