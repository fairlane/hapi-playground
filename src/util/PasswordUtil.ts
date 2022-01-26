import {createHash} from "crypto";
import {getSettings} from "../config/Settings";
import {Settings} from "../types/Types";

const generateRandomString = (length: number): string => {
  const characters = '#"€%&/()=?^¨ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const encryptString = (s: string): string => {
  let settings: Settings = getSettings();
  let concat = settings.passwordSalt + s;
  return createHash('sha256').update(concat).digest('hex');
}

export default class PasswordUtil {
  static generateRandomPassword(length: number) {
    return generateRandomString(length);
  }
  static encrypt(s: string) {
    return encryptString(s);
  }
}

export {generateRandomString, encryptString};