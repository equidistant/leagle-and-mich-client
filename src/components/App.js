import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from './Navbar'
import Home from './Home'
import Travels from './Travels'
import Footer from './Footer'

class App extends Component {
  state = {
    showTravels: false,
    showNav: false,
    small: false
  }
  sizes = {
    small: 760
  }
  render() {
    return (
      <BrowserRouter>
        <SApp>
          <GlobalStyle />
          <Navbar small={this.state.small} showNav={this.state.showNav} showHideNav={this.showHideNav}/>
          <Route exact path='/' render={() =>
              <Home small={this.state.small} showTravels={this.state.showTravels} showNav={this.state.showNav} /> } />
        </SApp>
      </BrowserRouter>
    )
  }
  componentDidMount() {
    setTimeout(
      () => this.setState({ showTravels: true }), 100)
    window.addEventListener('resize', this.resizeListener.bind(this))
    this.resizeListener()
  }
  resizeListener () {
    if (window.innerWidth < this.sizes.small) {
      this.setState({
        small: true
      })
    } else if (this.state.small){
      this.setState({
        small: false,
        showNav: false
      })
    }
  }
  showHideNav = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
}
export default App

const SApp = styled.div`
  height: 100%;
`


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro|Bubbler+One');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;

    @media screen and (max-width: 920px) {
      font-size: 56.25%;
    }

  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-family: 'Roboto', 'Source Serif Pro','Source Code Pro', monospace;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: .2rem;
    background: #2B2B2B;
    color: white;
  }
`

// @media screen and (max-width: 1200px) {
//   font-size: 56.25%;
// }
// @media screen and (max-width: 830px) {
//   font-size: 50%;
// }
// @media screen and (max-width: 500px) {
//   font-size: 45%;
// }

// @media all and (max-width: 1500px) {
//   html {
//     font-size: 56.25%;
//   }
// }
