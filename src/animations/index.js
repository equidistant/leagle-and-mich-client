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

export const spanFirstOn = keyframes`
  0% {
    transform: translate(-50%, -300%);
  }

  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export const spanFirstOff = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -300%);
  }
`
export const spanSecondOn = keyframes`
  0% {
    transform: translate(-50%, -50%)
  }
  25% {
    background-color: white;
  }
  50% {
    transform: translate(-50%, -50%) scale(1)
  }
  100% {
    transform: translate(-150%, -50%) scale(0)
  }
`
export const spanSecondOff = keyframes`
  0% {
    transform: translate(-150%, -50%) scale(0);
  }
  25% {
    background-color: white;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`
export const spanThirdOn = keyframes`
  0% {
    transform: translate(-50%, 200%);
  }
  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`

export const spanThirdOff = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, 200%);
  }
`
