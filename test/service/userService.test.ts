import {UserService} from '../../src/service/UserService';
import {User} from '../../src/entity/User';
import {createTestConnection} from "../_testutil/TestDatabase";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
describe('Add user', () => {
  it('user should be added', () => {
    return createTestConnection().then(connection => {
      const userService = new UserService(connection);
      let user: User = new User();
      user.username = "Testuser";
      user.fullName = "Test User";
      user.password = "pass";
      return expect(userService.addUser(user)).to.eventually.have.property("id");
    });
  });
});

describe('Save user', () => {
  it('user should be updated', () => {
    return createTestConnection().then(connection => {
      const userService = new UserService(connection);
      let user: User = new User();
      user.username = "Testuser X";
      user.fullName = "Test User";
      user.password = "pass";
      return userService.addUser(user).then(storedUser => {
        storedUser.fullName = "Updated Full Name";
        return userService.saveUser(storedUser).then(updatedUser => {
          expect(updatedUser.fullName).to.equal("Updated Full Name");
        });
      });
    });
  });
});
