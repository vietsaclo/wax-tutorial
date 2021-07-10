import { LocalStorageKeys } from "./keys";

class PublicModules {
  static fun_getUserLoginLocalStorage = () => {
    const userName = localStorage.getItem(LocalStorageKeys.USER_NAME);
    return userName;
  }

  static fun_setUserLoginLocalStorage = (user) => {
    localStorage.setItem(LocalStorageKeys.USER_NAME, user.userName);
  }

  static fun_removeUserLoginLocalStorage = () => {
    localStorage.removeItem(LocalStorageKeys.USER_NAME);
  }
}

export default PublicModules;