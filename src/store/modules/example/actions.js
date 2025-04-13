import * as types from '../types';

export function clickedButtonRequest() {
  return {
    type: types.CLICKED_BUTTON_REQUEST,
  };
}
export function clickedButtonSuccess() {
  return {
    type: types.CLICKED_BUTTON_SUCCESS,
  };
}
export function clickedButtonFailure() {
  return {
    type: types.CLICKED_BUTTON_FAILURE,
  };
}
