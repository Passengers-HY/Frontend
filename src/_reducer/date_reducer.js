import {INPUT_DATE, OUTPUT_DATE, TODAY_DATE} from '../_actions/types';


export default function (state = {}, action) {
  switch (action.type) {
    case INPUT_DATE:
      return {...state, dateSuccess:action.payload};
      break;
    case OUTPUT_DATE:
      return {...state, dateSuccess:action.payload};
      break;
    case TODAY_DATE:
      return {...state, dateSuccess:action.payload};
      break;
    default:
      return state;
  }
}