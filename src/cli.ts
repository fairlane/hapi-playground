import PasswordUtil from "./util/PasswordUtil";
import {UserService} from "./service/UserService";
import {connect} from "./connection/Database";

const run = () => {
    console.log("JEE -> ", PasswordUtil.generateRandomPassword(32));
    const userService = new UserService();
    userService.findAll().then(data => console.log(data));
}

connect().then(() => {
    run();
});

