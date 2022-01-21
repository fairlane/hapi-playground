import { User } from "../entity/User";
import {RepositoryAwareService} from "./RepositoryAwareService";
import PasswordUtil from "../util/PasswordUtil";
import {Settings} from "../config/Settings";

export class UserService extends RepositoryAwareService<User>{
  public async add(entity: User): Promise<User>  {
    entity.password = PasswordUtil.encrypt(entity.password, Settings.passwordSalt);
    return super.add(entity);
  }
}