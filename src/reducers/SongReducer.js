import * as types from "../actions/actionTypeSongs";
import initialState from "./initialStateSong";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function Songs(state = initialState.Songs, action) {
  switch (action.type) {
    case types.LOAD_SONGS_SUCCESS:
      return action.Songs;



    default:
      return state;
  }
}
