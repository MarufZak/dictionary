import React from 'react';
import styled from 'styled-components';
import Icon from '../generic/Icon';
import ToggleButton from '../generic/ToggleButton';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <Wrapper>
      <Icon width={32} height={36}>
        logo
      </Icon>
      <div className="settings">
        <Dropdown />
        <ToggleButton />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  .settings {
    display: flex;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 24px;
  }
`;

export default Header;
