import axios from "axios";
import { INPUT_DATE, OUTPUT_DATE, TODAY_DATE } from "./types";
import {Date_send} from '../components/main/CalendarForm';
import {Today_send} from '../pages/MainPage';

export function inputDate(dataTosubmit) { 
  const request = axios
    .post("http://localhost:4000/api/main/date", dataTosubmit, {withCredentials:true})
    .then((response) => response.data)
    .catch((error)=>console.log(error.response.data));
  return {
    type: INPUT_DATE,
    payload: request,
  };
}

export function outputDate() {
  const request = axios
  .get("http://localhost:4000/api/main", {params:{Date_send}, withCredentials:true})
  .then((response) => response.data)
  .catch((error)=>console.log(error.response.data));

  return{
    type: OUTPUT_DATE,
    payload:request,
  }
}

export function todayDate() {
  const request = axios
  .get("http://localhost:4000/api/main/today", {params:{Today_send}, withCredentials:true})
  .then((response)=> response.data)
  .catch((error)=>console.log(error.response.data));

  return{
    type: TODAY_DATE,
    payload:request,
  }
}