import * as waxjs from "@waxio/waxjs/dist";
import { message } from "antd";
import { PublicModules } from "../common";

const wax = new waxjs.WaxJS(process.env.REACT_APP_API_ENDPOINT, null, null, false);

class WaxServices {
  static fun_loginWax = () => {
    return new Promise((resolve, reject) => {
      wax.login()
        .then((userName) => {
          if (userName) resolve(userName);
          else reject(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static fun_loginWaxAsync = async () => {
    let userName = '';
    userName = await WaxServices.fun_loginWax()
      .catch((_error) => {
        userName = null;
      });

    return userName;
  };

  static fun_takeAction = async (action, dataValue) => {
    const loged = PublicModules.fun_getUserLoginLocalStorage();
    if (!loged) {
      message.error('Login requre!');
      return;
    }
    const actor = await WaxServices.fun_loginWaxAsync();
    if (!actor) {
      message.error('Login requre!');
      return;
    }
    // Main call to blockchain after setting action, account_name and data
    try {
      const resultWithConfig = await wax.api.transact({
        actions: [{
          account: process.env.REACT_APP_DAPP_ACCOUNT,
          name: action,
          authorization: [{
            actor: actor,
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
      return null;
    }
  }
}

export default WaxServices;