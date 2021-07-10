import { PublicModules } from "..";
import { ActionsType } from "../actions-type"
import { LocalStorageKeys } from "../keys";

const UserReducerInitialState = {
  userName: null,
}

const UserReducer = (state = UserReducerInitialState, action) => {
  switch (action.type) {
    case ActionsType.USER_LOGIN:
      PublicModules.fun_setUserLoginLocalStorage(action.value);
      return Object.assign({}, state, {
        ...action.value,
      });

    case ActionsType.USER_LOGOUT:
      PublicModules.fun_removeUserLoginLocalStorage();
      return Object.assign({}, state, {
        userName: null,
      });
    default:
      return state
  }
}

export default UserReducer;