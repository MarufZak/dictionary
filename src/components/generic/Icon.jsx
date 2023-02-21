import React from 'react';
import sprite from '../../assets/sprite.svg';

const Icon = ({ children, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprite}#${children}`}></use>
    </svg>
  );
};

export default Icon;
