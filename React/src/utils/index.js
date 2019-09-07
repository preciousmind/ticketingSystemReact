import CryptoJS from "crypto-js";
import { some } from "lodash";

export const objectHasEmptyValues = obj => some(obj, value => value === "");

export const encrypt = val => {
  const cryptobject = CryptoJS.AES.encrypt(val, "help-256-secure");
  const encrypted = {
    key: cryptobject.key + "", // don't send this
    iv: cryptobject.iv + "", // don't send this
    salt: cryptobject.salt + "", // don't send this
    ciphertext: cryptobject.ciphertext + "", // don't send this
    str: cryptobject + "" // send or store this
  };
  return encrypted.str;
};
