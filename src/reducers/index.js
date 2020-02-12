import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Cendol dawet",
      duration: "4:04"
    },
    {
      title: "Banyu langit",
      duration: "2:04"
    },
    {
      title: "Dalan anyar",
      duration: "55:04"
    },
    {
      title: "Asy",
      duration: "8:04"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
