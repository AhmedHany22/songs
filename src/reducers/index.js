import { combineReducers } from "redux";

export const songReducer = () => {
  return [
    { title: "Lose Yourself", duration: "5:23" },
    { title: "Never Surrender", duration: "3:32" },
    { title: "Etnaset", duration: "3:16" },
    { title: "Majnoun", duration: "7:15" },
    { title: "Red Kalbi", duration: "6:04" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
