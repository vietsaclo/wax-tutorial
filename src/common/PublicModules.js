import { UserLoged } from ".";
import { LocalStorageKeys } from "./keys";

class PublicModules {

  static fun_getPercision({
    number = '',
    percision = 9,
  }) {
    const numberBig = Number.parseFloat(number).toPrecision(20);
    const strs = numberBig.split('.');
    return strs[0] + '.' + strs[1].substr(0, percision - 1);
  };

  static fun_parseNumberOrZero(strNum) {
    try {
      const num = Number.parseFloat(strNum);
      if (String(num) === 'NaN')
        return 0;
      return num;
    } catch (_e) {
      return 0;
    }
  }

  static fun_log = (value, file, line) => {
    if (String(process.env.REACT_APP_DEBUG_MODE) === 'TRUE') {
      const logHeader = `======== DEBUG LOG MODE [ File: ${file || 'NULL'} ; Line: ${line || 'NULL'} ] ========`;
      console.log(logHeader);
      console.log(value);
      let logFooter = '';
      const mid = logHeader.length / 2;
      for (let i in logHeader) {
        if (i < mid - 5 || i > mid + 5)
          logFooter += '='
        else
          logFooter += '-'
      }
      console.log(logFooter);
    }
  }

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