import axios from "axios";
import { INPUT_PILL, OUTPUT_PILL } from "./types";

export function inputPill(dataTosubmit) {
  const request = axios
    .post("http://3.34.183.92:4000/api/main/control", dataTosubmit, {withCredentials:true})
    .then((response) => response.data)
    .catch((error)=>console.log('에러', error.response.data));

  return {
    type: INPUT_PILL,
    payload: request,
  }; 
}

export function outputPill() {
  var date;
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // Jan is 0
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  date = today;
  const request = axios
  .get("http://3.34.183.92/api/control/", {params:{date}, withCredentials:true})
  .then((response) => response.data)
  .catch((error)=>console.log('에러', error.response.data));

  return {
    type: OUTPUT_PILL,
    payload: request,
  };
}
