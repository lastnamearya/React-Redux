// Importing action types

import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

// function evaluate what type we're dealing with

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
