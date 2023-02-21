import React from 'react';
import styled from 'styled-components';

const Synonyms = ({ synonyms }) => {
  if (synonyms.length === 0) return;

  return (
    <Wrapper>
      <h3 className="synonym-title">Synonyms</h3>
      <ul className="synonym-list">
        {synonyms.map((synonym,index) => {
          return <li key={index} className="synonym">{synonym}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 20px;

  .synonym-title {
    font-weight: 400;
    color: var(--color-secondary);
  }

  .synonym {
    font-weight: 700;
    color: var(--color-purple);

    :not(:last-child) {
      ::after {
        content: ', ';
      }
    }
  }

  .synonym-list {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 576px){
    margin-top: 24px;
  }
`;

export default Synonyms;
