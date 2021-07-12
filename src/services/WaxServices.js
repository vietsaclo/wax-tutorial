import * as waxjs from "@waxio/waxjs/dist";
import { message } from "antd";
import { PublicModules, UserLoged } from "../common";

let wax = new waxjs.WaxJS(process.env.REACT_APP_API_ENDPOINT, null, null, false);

class WaxServices {
  static fun_loginWax = () => {
    return new Promise((resolve, reject) => {
      wax.login()
        .then((userName) => {
          if (userName) {
            const userLoged = new UserLoged();
            userLoged.userName = userName;
            userLoged.keys = wax.pubKeys;
            resolve(userLoged);
          }
          else reject(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static fun_loginWaxWithPubKeys = (userLoged) => {
    return new Promise((resolve, reject) => {
      wax = new waxjs.WaxJS(
        process.env.REACT_APP_API_ENDPOINT,
        userLoged.userName,
        userLoged.keys.split(','),
        false,
      );
      if (!wax) reject('BAD_USERLOGED');
      wax.login()
        .then((userName) => {
          if (userName) {
            const userLoged = new UserLoged();
            userLoged.userName = userName;
            userLoged.keys = wax.pubKeys;
            resolve(userLoged);
          }
          else reject('BAD_USERLOGED');
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static fun_loginWaxAsync = async () => {
    let userLoged = new UserLoged();
    userLoged = await WaxServices.fun_loginWax()
      .catch((_error) => {
        userLoged = null;
      });

    return userLoged;
  };

  static fun_loginWaxWithPubKeysAsync = async (userLoged) => {
    let result = new UserLoged();
    result = await WaxServices.fun_loginWaxWithPubKeys(userLoged)
      .catch((_err) => {
        result = null;
      });
    return result;
  };

  static fun_takeAction = async ({
    account = process.env.REACT_APP_DAPP_ACCOUNT,
    action = 'replace_action',
    dataValue = {},
  }) => {
    const loged = PublicModules.fun_getUserLoginLocalStorage();
    if (!loged) {
      message.error('Login requre!');
      return;
    }
    // Main call to blockchain after setting action, account_name and data
    try {
      const resultWithConfig = await wax.api.transact({
        actions: [{
          account: account,
          name: action,
          authorization: [{
            actor: loged.userName,
            permission: 'active',
          }],
          data: dataValue,
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 1200,
      });
      return resultWithConfig;
    } catch (err) {
      PublicModules.fun_log(err);
      return null;
    }
  }
}

export default WaxServices;