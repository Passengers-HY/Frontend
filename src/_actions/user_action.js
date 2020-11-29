import axios from "axios";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("http://3.34.183.92:4000/api/auth/login", dataToSubmit, {credentials:true})
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataTosubmit) {
  //서버에서 받은 데이터를 request에 저장
  const request = axios
    .post("http://3.34.183.92:4000/api/auth/register", dataTosubmit)
    .then((response) => response.data);

  //리턴 시켜서 리듀서로 보내기
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("http://3.34.183.92:4000/api/auth/logout", {credentials:true})
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}


