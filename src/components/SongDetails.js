import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ songNow }) => {
  if (!songNow) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {songNow.title}
        <br />
        Duration {songNow.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    songNow: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
