import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`AudioPlayer`, () => {
  it(`When a user click on button, the status play is change`, () => {
    const onPlayButtonClick1 = jest.fn();

    const audioPlayer = mount(<AudioPlayer
      isPlaying = {false}
      onPlayButtonClick = {onPlayButtonClick1}
      src = {`path`}
    />);

    expect(audioPlayer.state(`isPlaying`)).toEqual(false);

    audioPlayer.instance()._audioRef.current.pause = () => {};
    audioPlayer.instance()._audioRef.current.play = () => {};

    audioPlayer.setState({isLoading: false});
    audioPlayer.update();

    const button = audioPlayer.find(`button`);

    button.simulate(`click`);
    expect(audioPlayer.state(`isPlaying`)).toEqual(true);

    button.simulate(`click`);
    expect(audioPlayer.state(`isPlaying`)).toEqual(false);
  });
});