import {User} from "../entity/User";
import {getSettings} from "../config/Settings";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  ISignUpResult,
} from "amazon-cognito-identity-js";

export class CognitoService {
  private pool: CognitoUserPool;

  constructor() {
    this.pool = new CognitoUserPool({
      ClientId: getSettings().aws_client_id,
      UserPoolId: getSettings().aws_pool_id
    });
  }

  public async addUser(user: User)  {
    console.log("CALLED ADD USER CONTROLLER");
    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({Name: 'email', Value: user.email}));
    attributeList.push(new CognitoUserAttribute({Name: 'name', Value: user.name}));
    this.pool.signUp(user.username, user.password, attributeList, null, (err: Error, result: ISignUpResult) => {
        if (err) {
            console.error(err.message || JSON.stringify(err));
            return;
        }
      const cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
    });

    return true;
  }
}