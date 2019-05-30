import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = React.forwardRef((props, ref) => {
  const {isLoading, isPlaying, onPlayButtonClick} = props;

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio
          ref={ref}
        />
      </div>
    </React.Fragment>
  );
});

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

AudioPlayer.displayName = `AudioPlayer`;

export default AudioPlayer;

