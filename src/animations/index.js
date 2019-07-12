import { keyframes } from 'styled-components'

export const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 2rem, 0);
  }
  95% {
    transform: translate3d(0, -0.15rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
