import React from "react";
import SongList from "./songsList";
import SongDetailes from "./songDetailes";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "45px" }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetailes />
        </div>
      </div>
    </div>
  );
};

export default App;
