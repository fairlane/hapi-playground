import { Connection } from "typeorm";
import { User } from "../entity/User";
import {UserRepository} from "../repository/UserRepository";

export class UserService {
  userRepository: UserRepository;

  constructor(connection: Connection) {
    this.userRepository = connection.getCustomRepository(UserRepository);
  }

  saveUser(user: User) {
    return this.userRepository.update(user.id, user).then(result => {
      return user;
    });
  }

  addUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}