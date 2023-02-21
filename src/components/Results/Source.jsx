import React from 'react';
import styled from 'styled-components';
import Icon from '../generic/Icon';

const Source = ({ sources }) => {
  if (!sources) return;

  return (
    <Wrapper>
      <p className="label">
        Source:{' '}
        {sources.map((source, index) => {
          return (
            <a
              key={index}
              target="_blank"
              href={source}
              className="link"
            >
              {source}
              <Icon className="icon" width={12} height={12}>
                new-window
              </Icon>
            </a>
          );
        })}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid var(--bg-box);

  .label {
    color: var(--color-secondary);
    text-decoration: underline;
    font-size: var(--font-sm);
    display: flex;
    align-items: center;
    gap: 20px;

    .link {
      color: inherit;
    }
  }

  .icon {
    margin-left: 10px;
  }
`;

export default Source;
