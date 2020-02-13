import { combineReducers } from "redux";
import { songs } from "../data/songs";

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songs,
  selectedSong: selectedSongReducer
});
