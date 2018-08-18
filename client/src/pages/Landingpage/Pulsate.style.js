import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const pulsate = `
  animation-name: ${fadeIn};
  animation-delay: 200;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
`;
