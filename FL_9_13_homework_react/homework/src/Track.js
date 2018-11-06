import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      author: this.props.author,
      title: this.props.title,
      isPlaying: false,
    };
    this.handleIsFavotire = this.handleIsFavotire.bind(this);
    this.handleIsPlaying = this.handleIsPlaying.bind(this);
  }
  handleIsPlaying() {
    this.setState(prevstate => ({
      isPlaying: !prevstate.isPlaying,
    }));
  }
  handleIsFavotire() {
    this.setState(prevstate => ({
      isFavorite: !prevstate.isFavorite,
    }));
  }
  render() {
    const {
      isFavorite, author, title, isPlaying,
    } = this.state;
    return (
      <div role="button" tabIndex={0}  onKeyDown={() => { this.props.updateDataMuzic(this); }} onClick={() => { this.props.updateDataMuzic(this); }}>
        <i role="button" tabIndex={0} onKeyDown={this.handleIsPlaying} onClick={this.handleIsPlaying} className="material-icons">{ isPlaying ? 'pause' : 'play_arrow' }</i>
        <div className="description">
          <span className="description-title">{ title }</span>
          <span className="description-author">{ author }</span>
        </div>
        <button type="button" onKeyDown={this.handleIsFavotire} onClick={this.handleIsFavotire} className="material-icons isFavorite">{ isFavorite ? 'favorite' : 'favorite_border'}</button>
      </div>
    );
  }
}
Track.propTypes = {
  updateDataMuzic: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export { Track };
