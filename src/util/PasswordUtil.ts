import {createHash} from "crypto";
import {Hash} from "crypto";
import {Settings} from "../config/Settings";

const generateRandomString = (lenth: number): string => {
  const characters = '#"€%&/()=?^¨ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const encryptString = (s: string, salt: string): string => {
  let concat = salt + s;
  return createHash('sha256').update(concat).digest('hex');
}

export default class PasswordUtil {
  static generateRandomPassword(length: number) {
    return generateRandomString(length);
  }
  static encrypt(s: string, salt: string) {
    return encryptString(s, salt);
  } 
}

export {generateRandomString, encryptString};