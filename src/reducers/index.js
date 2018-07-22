import { combineReducers } from "redux";
import postReducer from "./postReducer";

// postReducer ~ this is where we're going to evaluate our actions that are committed such as getting data from an API, creating a new POST Request and rendering response in UI

export default combineReducers({
  posts: postReducer
});
