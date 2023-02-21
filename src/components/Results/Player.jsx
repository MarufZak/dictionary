import React from 'react';
import styled from 'styled-components';
import Icon from '../generic/Icon';

const Player = ({ audioSrc }) => {
  if (!audioSrc) return;

  const audioRef = React.useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <Wrapper>
      <audio ref={audioRef} src={audioSrc} />
      <Icon
        width={window.innerWidth > 576 ? 75 : 48}
        height={window.innerWidth > 576 ? 75 : 48}
        onClick={playAudio}
      >
        play
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  justify-self: end;
  grid-row: 1 / 3;
`;

export default Player;
