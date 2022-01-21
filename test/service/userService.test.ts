import {UserService} from '../../src/service/UserService';
import {User} from '../../src/entity/User';
import {createTestConnection} from "../_testutil/TestDatabase";
import {assert, use} from 'chai';
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
describe('Add user', () => {
  it('user should be added', () => {
    return createTestConnection().then(connection => {
      const userService = new UserService(connection, User);
      let user: User = new User();
      const originalPass = "pass"
      user.username = "Testuser";
      user.fullName = "Test User";
      user.password = originalPass;
      return userService.add(user).then(storedUser => {
        assert.typeOf(storedUser.id, 'number');
        assert.notEqual(storedUser.password, originalPass);
      });
    });
  });
});

describe('Save user', () => {
  it('user should be updated', () => {
    return createTestConnection().then(connection => {
      const userService = new UserService(connection, User);
      let user: User = new User();
      user.username = "Testuser X";
      user.fullName = "Test User";
      user.password = "pass";
      return userService.add(user).then(storedUser => {
        storedUser.fullName = "Updated Full Name";
        return userService.save(storedUser).then(updatedUser => {
          expect(updatedUser.fullName).to.equal("Updated Full Name");
        });
      });
    });
  });
});

describe('List all', () => {
  it('users should be listed', () => {
    return createTestConnection().then(connection => {
      const userIds = [1, 2, 3, 4, 5];
      let saves: Promise<User>[] = [];
      const userService = new UserService(connection, User);
      for (let userId in userIds) {
        let user: User = new User();
        user.username = `Testuser X ${userId}`;
        user.fullName = `Test Full Name ${userId}`;
        user.password = "pass";
        saves.push(userService.add(user));
      }
      return Promise.all(saves).then(() => {
          userService.findAll().then(users => {
            expect(users.length).to.gte(4);
          });
      });
    });
  });
});
