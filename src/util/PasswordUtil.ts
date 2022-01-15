import {createHash} from "crypto";
import {Hash} from "crypto";
import {Settings} from "../config/Settings";

export default class PasswordUtil {

  static generateRandomPassword(lenth: number): string {
    const characters = '#"€%&/()=?^¨ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result: string = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static encryptString(s: string, salt: string): string {
    let concat = salt + s;
    return createHash('sha256').update(concat).digest('hex');
  }
}
