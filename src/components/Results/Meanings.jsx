import React from 'react';
import styled from 'styled-components';
import Meaning from './Meaning';

const Meanings = ({ meanings }) => {
  if (meanings.length === 0) return;

  return (
    <Wrapper>
      {meanings?.map((definition, index) => {
        return <Meaning key={index} {...definition} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Meanings;
