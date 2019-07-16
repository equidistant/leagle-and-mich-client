import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { LogoHeaderImg } from '../images'
import * as animations from '../animations'

class Navbar extends Component {
  render () {
    if (this.props.small) {
      return (
        <>
          <SNavbarSmall>
            <SLogoSmall/>
            <SCloseButton onClick={this.showHideNav}>
              <SCloseSpan on={this.props.showNav}/>
              <SCloseSpan on={this.props.showNav}/>
              <SCloseSpan on={this.props.showNav}/>
            </SCloseButton>
          </SNavbarSmall>
            <SNavbarBackground showNav={this.props.showNav}>
              <SNavbarBackgroundCenter>
                <SNavbarBackgroundCenterLink>Travel Blog</SNavbarBackgroundCenterLink>
                <SNavbarBackgroundCenterLink>Travel Gallery</SNavbarBackgroundCenterLink>
                <SNavbarBackgroundCenterLink>Ana's Portfolio</SNavbarBackgroundCenterLink>
                <SNavbarBackgroundCenterLink>About us</SNavbarBackgroundCenterLink>
              </SNavbarBackgroundCenter>
            </SNavbarBackground>
        </>
      )
    } else {
      return (
        <SNavbar>
          <SLink>Travel Blog</SLink>
          <SLink>Travel Gallery</SLink>
          <SLogo/>
          <SLink>Ana's Portfolio</SLink>
          <SLink>About Us</SLink>
        </SNavbar>
      )
    }
  }
  showHideNav = () => {
    this.props.showHideNav()
  }
}

// small Navbar

const SNavbarSmall = styled.div`
  grid-column: nav-start / nav-end;
  grid-row: 1 / 2;
  width: 100%;
  z-index: 4;
  align-self: start;
  justify-self: start;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  position: relative;
`

const SLogoSmall = styled.div`
  height: 10rem;
  width: 8rem;
  background-image: url(${LogoHeaderImg});
  background-position: center;
  background-size: cover;
`

const SNavbarBackground = styled.div`
  position: fixed;
  width: 0;
  height: 100vh;
  background-color: #2B2B2B;
  z-index: 3;
  opacity: 0;
  transition: all 0.3s linear;
  ${props => props.showNav && css `opacity: 0.9; width: 100%;`}
`

const SNavbarBackgroundCenter = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
`

const SNavbarBackgroundCenterLink = styled.div`
  width: max-content;
  color: white;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
`

const SCloseSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 0.4rem;
  background-color: #EBEBEB;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.3s linear;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #EBEBEB;
    transition: all 0.3s linear;
  }
  &:nth-child(1) {
    animation: ${animations.spanFirstOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  &:nth-child(2) {
    animation: ${animations.spanSecondOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  &:nth-child(3) {
    animation: ${animations.spanThirdOff} 0.5s ease-in-out;
    animation-fill-mode: forwards;
  }
  ${props => props.on && css`
    &:nth-child(1) {
      animation: ${animations.spanFirstOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
    &:nth-child(2) {
      animation: ${animations.spanSecondOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
    &:nth-child(3) {
      animation: ${animations.spanThirdOn} 0.5s ease-in-out;
      animation-fill-mode: forwards;
    }
  `}
`
const SCloseButton = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  z-index: 3;
  margin-top: 1rem;
  &:hover ${SCloseSpan}::before {
    width: 100%;
    transition: all 0.3s linear;
    background-color: white;
  }
`

// big Navbar

const SNavbar = styled.div`
  grid-column: nav-start / nav-end;
  grid-row: 1 / 2;
  width: 100%;
  z-index: 1;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SLink = styled.div`
  width: max-content;
  height: 6rem;
  color: white;
  text-align: center;
  font-size: 1.7rem;
  align-self: flex-end;
  margin-left: 1rem;
  margin-right: 1rem;
  text-transform: uppercase;
`
const SLogo = styled.div`
  height: 14rem;
  width: 12rem;
  margin-top: -1rem;
  margin-right: 1.5rem;
  margin-left: 1rem;
  background-image: url(${LogoHeaderImg});
  background-position: center;
  background-size: cover;
`

export default Navbar
