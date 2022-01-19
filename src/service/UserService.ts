import { User } from "../entity/User";
import {RepositoryAwareService} from "./RepositoryAwareService";

export class UserService extends RepositoryAwareService<User>{
}