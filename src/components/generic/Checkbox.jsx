import React from 'react';
import styled from 'styled-components';

const Checkbox = (props) => {
  return <StyledCheckbox type="checkbox" {...props} />;
};

const StyledCheckbox = styled.input`
  appearance: none;

  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? 'var(--color-purple)' : 'var(--color-secondary)'};
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--color-white);
    position: absolute;
    top: 50%;
    left: ${(props) => (props.active ? '23px' : '3px')};
    transform: translateY(-50%);
    transition: 0.3s;
  }
`;

export default Checkbox;
