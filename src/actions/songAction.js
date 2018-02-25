import SongsApi from "../api/mockSongApi";
import * as typesa from "./actionTypeSongs";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";


export function loadSongSuccess(Songs) {
  return { type: typesa.LOAD_SONGS_SUCCESS, Songs };
}


// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.


export function loadSongs() {
  return function(dispatch) {

    return SongsApi.GetAllSongs()
      .then(Songs => {
        dispatch(loadSongSuccess(Songs));
      })
      .catch(error => {
        throw error;
      });
  };
}


