import React from "react";
import { SelectSong } from "./../actions";
import SongList from "./songsList";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "45px" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <h1>Song Detailes</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
