import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SApp>
          <GlobalStyle />
          <Header />
          <Route exact path='/' component={ Home } />
          <Footer />
        </SApp>
      </BrowserRouter>
    )
  }
}
export default App

const SApp = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: [start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 13rem) [col-end]) [center-end] 1fr [end];
  grid-template-rows: 7.5vh min-content min-content 7.5vh;
`


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro');
  html, body, #root {
    height: 100%;
  }
  html: {
    font-size: 62.5%;
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
    letter-spacing: .1rem;
    background: #2B2B2B;
  }
`
