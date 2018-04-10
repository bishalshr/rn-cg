import * as types from '../actions/types';

const initialState = {
  currentSideMenu: null
};

export default function sideMenu(state = initialState, action) {
  switch(action.type) {
    case types.CHANGE_SIDE_MENU:
      return {
        ...state,
        currentSideMenu: action.data
      };

    default:
      return state;
  }
}
