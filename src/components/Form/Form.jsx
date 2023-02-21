import React from 'react';
import styled from 'styled-components';
import Icon from '../generic/Icon';
import Input from '../generic/Input';

const Form = ({ fetchData }) => {
  const [word, setWord] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(word);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        type="text"
        placeholder="Search for any word…"
      />
      <button type="submit">
        <Icon width={15} height={15} className="icon">
          search
        </Icon>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  margin-bottom: 45px;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;

    .icon {
      vertical-align: middle;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 24px;
  }
`;

export default Form;
