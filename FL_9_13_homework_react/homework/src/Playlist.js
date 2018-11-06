import React, { Component } from 'react';
import { Track } from './Track';
import PropTypes from 'prop-types';
class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      isLoaded: false,
    };
    this.updateDataMuzic = this.updateDataMuzic.bind(this);
  }
  componentDidMount() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          tracks: json,
        });
      });
  }
  updateDataMuzic(value) {
    this.props.getTrack(value);
  }
  render() {
    const { isLoaded, tracks } = this.state;
    if (!isLoaded) {
      return (
        <p>Loading tracks.......</p>
      );
    }
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        <ul className="track-items">
          { tracks.map(track => (
            <li key={track.id}>
              <Track updateDataMuzic={this.updateDataMuzic} author={track.author} title={track.title} />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
Playlist.propTypes = {
  getTrack: PropTypes.func.isRequired,
};

export { Playlist };
