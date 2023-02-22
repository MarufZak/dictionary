import React from 'react';
import styled from 'styled-components';
import Icon from '../generic/Icon';
import Input from '../generic/Input';

const Form = ({ fetchData, isInputEmpty, setIsInputEmpty }) => {
  const [word, setWord] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!word) {
      return setIsInputEmpty(true);
    }

    setIsInputEmpty(false);
    fetchData(word);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <form className="form">
        <Input
          className={`input ${isInputEmpty ? 'empty' : ''}`}
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
      </form>
      {isInputEmpty && (
        <p className="error">Whoops, can't be empty…</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 45px;
  .form {
    position: relative;
  }

  .error {
    margin-top: 8px;
    color: var(--color-tomato);
  }

  .input.empty {
    outline: 1px solid var(--color-tomato);
  }

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
