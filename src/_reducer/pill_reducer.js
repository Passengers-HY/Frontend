import {INPUT_PILL} from '../_actions/types';
import {OUTPUT_PILL} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case INPUT_PILL:
      return {...state, pillSuccess:action.payload};
      break;

    case OUTPUT_PILL:
      return {...state,pillSuccess:action.payload};
      break;

    default:
      return state;
  }

}