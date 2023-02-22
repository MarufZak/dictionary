import React from 'react';
import styled from 'styled-components';

const Error = ({ message }) => {
  return (
    <Wrapper>
      <p className="emoji">😕</p>
      <h3 className="title">{message.title}</h3>
      <p className="text">{message.msg}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;

  .emoji {
    font-size: clamp(3.2rem, 4.45vw, 7.2rem);
    margin-bottom: 44px;
  }

  .title {
    color: var(--color-primary);
    margin-bottom: 24px;
  }

  .text {
    color: var(--color-secondary);
  }

  @media screen and (max-width: 576px) {
    .emoji {
      margin-bottom: 24px;
    }

    .title {
      margin-bottom: 12px;
    }
  }
`;

export default Error;
