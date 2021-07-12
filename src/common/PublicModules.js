import { UserLoged } from ".";
import { LocalStorageKeys } from "./keys";

class PublicModules {
  static fun_getUserLoginLocalStorage = () => {
    const userLoged = new UserLoged();
    const userName = localStorage.getItem(LocalStorageKeys.USER_NAME);
    const keys = localStorage.getItem(LocalStorageKeys.KEYS);
    if (!userName || !keys) return null;
    userLoged.userName = userName;
    userLoged.keys = keys;
    return userLoged;
  }

  static fun_setUserLoginLocalStorage = (user) => {
    localStorage.setItem(LocalStorageKeys.USER_NAME, user.userName);
    localStorage.setItem(LocalStorageKeys.KEYS, user.keys);
  }

  static fun_removeUserLoginLocalStorage = () => {
    localStorage.removeItem(LocalStorageKeys.USER_NAME);
    localStorage.removeItem(LocalStorageKeys.KEYS);
  }
}

export default PublicModules;