import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { LogoHeaderImg } from '../images'
import * as animations from '../animations'

class Navbar extends Component {
  render () {
    if (this.props.small) {
      if (!this.props.showNav) {
        return (
          <SNavbarSmall>
            <SLogoSmall/>
              <SHamburger onClick={this.showHideNav}>
                <SHamburgerLine/>
                <SHamburgerLine/>
                <SHamburgerLine/>
              </SHamburger>
          </SNavbarSmall>
        )
      } else {
        return (
          <SNavbarBackground>
              <SClose onClick={this.showHideNav}/>
          </SNavbarBackground>
        )
      }
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
  height: 5.5rem;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  align-self: flex-end;
  margin-left: 1rem;
  margin-right: 1rem;
  text-transform: uppercase;
`
const SLogo = styled.div`
  height: 14rem;
  width: 12rem;
  margin-top: 6rem;
  margin-right: 1rem;
  margin-left: 1rem;
  background-image: url(${LogoHeaderImg});
  background-position: center;
  background-size: cover;
`

// small Navbar

const SNavbarSmall = styled.div`
  grid-column: nav-start / nav-end;
  grid-row: 1 / 2;
  width: 100%;
  z-index: 1;
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

const SHamburger = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
`

const SHamburgerLine = styled.span`
  width: 100%
  height: 2px;
  margin-top: 1rem;
  background-color: white;
`

const SClose = styled.div`
  align-self: center;
  width: 4rem;
  height: 4rem;
  opacity: 1;
  margin-top: 0.8rem;
  &::before, &::after {
    position: absolute;
    right: 2.5rem;
    content: ' ';
    height: 4.1rem;
    width: 2px;
    background-color: white;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const SNavbarBackground = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: red;
  z-index: 2;
`

const SCloseButton = styled.div`
  position: absolute
  width: 80px
  height: 80px
  cursor: pointer
  background: hsl(0, 0, 100)
  border-radius: 50%
  border: none
  outline: none
`

const SCloseSpan = styled.span`
  position: absolute
  width: 50px
  height: 4px
  top: 50%
  left: 50%
  background: hsl(0, 0, 15)
  border-radius: 2px
  overflow: hidden
  transition: all 0.3s linear
  &::before
    content: ''
    position: absolute
    width: 0
    height: 100%
    top: 0
    right: 0
    background-color: white;
    transition: all 0.3s linear
  &:nth-child(1)
    animation: span-first-off 0.5s ease-in-out
    animation-fill-mode: forwards
  &:nth-child(2)
    animation: span-second-off 0.5s ease-in-out
    animation-fill-mode: forwards
  &:nth-child(3)
    animation: span-third-off 0.5s ease-in-out
    animation-fill-mode: forwards
  ${props => props.on && css`
    &:nth-child(1)
      animation: span-first-on 0.5s ease-in-out
      animation-fill-mode: forwards
    &:nth-child(2)
      animation: span-second-on 0.5s ease-in-out
      animation-fill-mode: forwards
    &:nth-child(3)
      animation: span-third-on 0.5s ease-in-out
      animation-fill-mode: forwards
    `}
`

// #btn.on
//   &:hover span::before
//     width: 100%
//     transition: all 0.3s linear
//   span






export default Navbar
