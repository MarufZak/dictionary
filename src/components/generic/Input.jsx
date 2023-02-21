import React from 'react';
import styled from 'styled-components';

const Input = ({ ...props }) => {
  return <StyledInput type="text" {...props} />;
};

const StyledInput = styled.input`
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
  padding: 20px 48px 20px 20px;
  background-color: var(--bg-input);
  border-radius: 16px;
  color: var(--color-primary);
  font-weight: 700;
  font-size: var(--font-lg);
  :focus {
    outline: 1px solid var(--color-purple);
  }
  @media screen and (max-width: 576px) {
    padding: 14px 48px 14px 24px;
  }
`;

export default Input;
