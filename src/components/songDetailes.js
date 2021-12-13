import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetailes extends Component {
  render() {
    const { song } = this.props;
    if (!song)
      return (
        <div className="ui container">
          <h1>Select a song</h1>{" "}
        </div>
      );
    return (
      <div className="ui container">
        <h2>Detailes for : </h2>
        <h4>
          Title : {song.title} <br /> Duration : {song.duration}{" "}
        </h4>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetailes);
