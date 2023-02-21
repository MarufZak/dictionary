import React from 'react';
import styled from 'styled-components';
import Loading from '../generic/Loading';
import Meanings from './Meanings';
import Player from './Player';
import Source from './Source';

const Results = ({ data, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (data.length === 0) return;

  const { word, meanings, sourceUrls } = data;
  const phonetics = data.phonetic
    ? data.phonetic
    : data.phonetics.find((item) => item.text).text;
  const phoneticsAudio = data.phonetics.find((item) => item).audio;

  return (
    <Wrapper>
      <header className="header">
        <h1 className="word">{word}</h1>
        <p className="phonetics">{phonetics}</p>
        <Player audioSrc={phoneticsAudio} />
      </header>
      <Meanings meanings={meanings} />
      <Source sources={sourceUrls} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  animation: fadeIn 0.5s;

  .header {
    display: grid;
    grid-template: auto auto / 1fr 1fr;
    align-items: center;
  }

  .phonetics {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    color: var(--color-purple);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
  }
`;

export default Results;
