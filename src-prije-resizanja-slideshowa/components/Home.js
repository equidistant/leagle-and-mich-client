import React, { Component } from 'react'
import styled from 'styled-components'

import Slideshow from './Slideshow'
import TravelsGallery from './Travels-Gallery'

class Home extends Component {
  state = {
    showTravels: false
  }
  render () {
    return (
      <SHome>
        <Slideshow/>
        {this.state.showTravels && <TravelsGallery/>}
      </SHome>
    )
  }
  componentDidMount() {
    setTimeout(
      () => this.setState({ showTravels: true }), 100)
  }
}

const SHome = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: [start previous-start] 5vw [previous-end center-start] 1fr [center-end next-start] 5vw [next-end end];
  grid-template-rows:  min-content min-content;
  justify-content: center;
`
//

export default Home
