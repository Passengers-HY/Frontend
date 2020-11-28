import { LOGIN_USER } from "../_actions/types";
import { REGISTER_USER } from "../_actions/types";
import {LOGOUT_USER} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
      break;

    case LOGOUT_USER:
      return {...state, logoutSuccess:action.payload};
      break;

    default:
      return state;
  }
}