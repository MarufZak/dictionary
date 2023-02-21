import React from 'react';
import styled from 'styled-components';
import Definitions from './Definitions';
import Synonyms from './Synonyms';

const Meaning = (props) => {
  const { partOfSpeech: type, definitions, synonyms } = props;
  return (
    <Wrapper>
      <h2 className="type">{type}</h2>
      <h3 className="title">Meaning</h3>
      <Definitions definitions={definitions} />
      <Synonyms synonyms={synonyms} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 40px;

  .type {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 20px;
    font-style: italic;

    ::after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color: var(--bg-box);
      transition: 0.3s;
    }
  }

  .title {
    margin: 40px 0 24px 0;
    color: var(--color-secondary);
    font-weight: 400;
    font-size: var(--font-sm);
  }

  @media screen and (max-width: 576px) {
    margin-top: 32px;

    .title {
      margin: 32px 0 16px 0;
    }
  }
`;

export default Meaning;
