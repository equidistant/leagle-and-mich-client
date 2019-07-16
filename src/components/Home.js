import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Slideshow from './Slideshow'
import TravelsGallery from './Travels-Gallery'
import Footer from './Footer'

class Home extends Component {
  render () {
    return (
      <SHome>
        <Slideshow/>
        <TravelsGallery />
        <Footer />
      </SHome>
    )
  }
}


const SHome = styled.div`
  display: grid;
  grid-template-columns: [start previous-start] 10% [previous-end center-start nav-start] 8fr [center-end next-start nav-end] 10% [next-end end];
  grid-template-rows: min-content min-content min-content;
  justify-content: center;
`
//

export default Home
