import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Checkbox from '../generic/Checkbox';

const ToggleButton = () => {
  const [isDarkModeActive, setIsDarkModeActive] =
    React.useState(false);

  const handleClick = () => {
    setIsDarkModeActive((prevState) => !prevState);

    document.body.classList.toggle('dark');
  };

  return (
    <Wrapper darkModeActive={isDarkModeActive}>
      <Checkbox active={isDarkModeActive} onClick={handleClick} />
      <Icon className="icon" width={20} height={20}>
        moon
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 26px;
  border-left: 1px solid var(--bg-box);
  transition: 0.3s;

  .icon {
    stroke: ${(props) =>
      props.darkModeActive
        ? 'var(--color-purple)'
        : 'var(--color-secondary)'};
  }

  @media screen and (max-width: 576px) {
    padding-left: 16px;
  }
`;

export default ToggleButton;
