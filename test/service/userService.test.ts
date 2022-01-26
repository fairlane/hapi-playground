import {UserService} from '../../src/service/UserService';
import {User} from '../../src/entity/User';
import {assert} from 'chai';
import {Connection} from "typeorm";
import {connect} from '../../src/connection/Database';

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
describe('User service test', () => {
  let conn: Connection;

  before(async () => conn = await connect());

  it('user should be added', async () => {
    const userService = new UserService(User);
    const originalPass = "pass"
    let user: User = new User();
    user.username = "Testuser";
    user.fullName = "Test User";
    user.password = originalPass;
    const storedUser = await userService.add(user);
    assert.typeOf(storedUser.id, 'number');
    assert.notEqual(storedUser.password, originalPass);
  });

  it('user should be updated', async () => {
    const userService = new UserService(User);
    let user: User = new User();
    user.username = "Testuser X";
    user.fullName = "Test User";
    user.password = "pass";
    const storedUser = await userService.add(user);
    storedUser.fullName = "Updated Full Name";
    const updatedUser = await userService.save(storedUser);
    expect(updatedUser.fullName).to.equal("Updated Full Name");
  });

  it('users should be listed', () => {
    const userIds = [1, 2, 3, 4, 5];
    let saves: Promise<User>[] = [];
    const userService = new UserService(User);
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
