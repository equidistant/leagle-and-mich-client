import React, { Component } from 'react'
import styled from 'styled-components'

import Slideshow from './Slideshow'
import { LogoHeaderImg } from '../images'

export default () => {
  return (
    <SHeader>
      Travels
      <SLogo />
      Gallery
    </SHeader>
  )
}

const SHeader = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #00000064, #00000050);
  color: white;
`

const SLogo = styled.div`
  height: 17.5vh;
  width: 8rem;
  margin-top: 6.5vh;
  background-image: url(${LogoHeaderImg});
  background-position: center;
  background-size: cover;
  z-index: 1;
`
