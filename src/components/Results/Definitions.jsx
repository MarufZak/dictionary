import React from 'react';
import styled from 'styled-components';

const Definitions = ({ definitions }) => {
  return (
    <Wrapper>
      {definitions.map((item, index) => {
        return (
          <li key={index} className="definition">
            {item.definition}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding-left: 20px;

  .definition {
    display: grid;
    grid-template-columns: 5px auto;
    column-gap: 20px;
    font-size: var(--font-sm);

    ::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--color-purple);
      margin-top: 7px;
    }
  }

  .definition:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export default Definitions;
