import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <div className="circle circle6"></div>
      <div className="circle circle7"></div>
      <div className="circle circle8"></div>
      <div className="circle circle9"></div>
      <div className="circle circle10"></div>
      <div className="circle circle11"></div>
      <div className="circle circle12"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0 auto;

  .circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .circle::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: var(--color-purple);
    border-radius: 100%;
    animation: circleFadeDelay 1.2s infinite ease-in-out both;
  }
  .circle2 {
    transform: rotate(30deg);
  }
  .circle3 {
    transform: rotate(60deg);
  }
  .circle4 {
    transform: rotate(90deg);
  }
  .circle5 {
    transform: rotate(120deg);
  }
  .circle6 {
    transform: rotate(150deg);
  }
  .circle7 {
    transform: rotate(180deg);
  }
  .circle8 {
    transform: rotate(210deg);
  }
  .circle9 {
    transform: rotate(240deg);
  }
  .circle10 {
    transform: rotate(270deg);
  }
  .circle11 {
    transform: rotate(300deg);
  }
  .circle12 {
    transform: rotate(330deg);
  }
  .circle2::before {
    animation-delay: -1.1s;
  }
  .circle3::before {
    animation-delay: -1s;
  }
  .circle4::before {
    animation-delay: -0.9s;
  }
  .circle5::before {
    animation-delay: -0.8s;
  }
  .circle6::before {
    animation-delay: -0.7s;
  }
  .circle7::before {
    animation-delay: -0.6s;
  }
  .circle8::before {
    animation-delay: -0.5s;
  }
  .circle9::before {
    animation-delay: -0.4s;
  }
  .circle10::before {
    animation-delay: -0.3s;
  }
  .circle11::before {
    animation-delay: -0.2s;
  }
  .circle12::before {
    animation-delay: -0.1s;
  }

  @keyframes circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

export default Loading;
