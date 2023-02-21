import React from 'react';
import styled from 'styled-components';
import { dropdownItems } from '../../utils/constants';
import Icon from '../generic/Icon';
import DropdownList from './DropdownList';

const Dropdown = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleHeaderClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleItemClick = (index, fontFamily) => {
    setActiveIndex(index);

    setIsOpened(false);

    document.body.style.fontFamily = fontFamily;
  };

  return (
    <Wrapper>
      <header onClick={handleHeaderClick} className="header">
        <p className="current">{dropdownItems[activeIndex].label}</p>
        <Icon width={12} height={6}>
          arrow
        </Icon>
      </header>
      <DropdownList
        handleItemClick={handleItemClick}
        opened={isOpened}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-right: 26px;

  .header {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .current {
    font-weight: 700;
  }

  @media screen and (max-width: 576px) {
    padding-right: 16px;
    .header {
      gap: 15px;
    }
  }
`;

export default Dropdown;
