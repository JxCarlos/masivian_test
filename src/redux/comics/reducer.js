import {
  SEARCH_COMMIC,
} from "./constants";

export const initialState = {
  searchCommic: []
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COMMIC:
      return Object.assign({}, state, {
        searchCommic: action.searchCommic
      });
    default:
      return state;
  }
};

export default artistReducer;
