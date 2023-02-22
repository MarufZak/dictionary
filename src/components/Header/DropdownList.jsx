import React from 'react';
import styled from 'styled-components';
import { dropdownItems } from '../../utils/constants';

const DropdownList = ({ opened, handleItemClick }) => {
  return (
    <Wrapper opened={opened}>
      {dropdownItems.map((item, index) => {
        return (
          <p
            className="item"
            onClick={() => handleItemClick(index, item.value)}
            key={item.id}
          >
            {item.label}
          </p>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 150px;
  top: ${(props) => (props.opened ? '130%' : '50%')};
  opacity: ${(props) => (props.opened ? 1 : 0)};
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
  transition: ${(props) => (props.opened ? '0.3s' : 0)};
  transform: translateX(-50%);
  background-color: var(--bg-input);
  border-radius: 6px;
  padding: 0 10%;
  z-index: 1;
  box-shadow: var(--shadow);

  .item {
    padding: 10px 0;
    color: var(--color-primary);
  }
`;

export default DropdownList;
