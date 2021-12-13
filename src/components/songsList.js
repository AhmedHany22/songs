import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectSong } from "../actions";

class SongList extends Component {
  render() {
    const { songs, onSelectSong } = this.props;
    return (
      <div className="ui devided list">
        {renderSongList(songs, onSelectSong)}
      </div>
    );
  }
}

const renderSongList = (songs, onSelectSong) => {
  return songs.map((s) => (
    <div className="item" key={s.title}>
      <div className="right floated content">
        <button className="ui button primary" onClick={() => onSelectSong(s)}>
          Select
        </button>
      </div>
      <div className="content">
        <p>
          {s.title}
          <br />
          {s.duration}
        </p>
      </div>
    </div>
  ));
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { onSelectSong: SelectSong })(SongList);
