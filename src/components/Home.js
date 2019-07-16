import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Slideshow from './Slideshow'
import TravelsGallery from './Travels-Gallery'

class Home extends Component {
  state = {
    showTravels: false,
    showNav: false,
    small: false
  }
  sizes = {
    small: 790
  }
  render () {
    return (
      <SHome>
        <Navbar small={this.state.small} showNav={this.state.showNav} showHideNav={this.showHideNav}/>
        <Slideshow/>
      </SHome>
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


const SHome = styled.div`
  display: grid;
  grid-template-columns: [start previous-start] 10% [previous-end center-start nav-start] 8fr [center-end next-start nav-end] 10% [next-end end];
  grid-template-rows: min-content min-content;
  justify-content: center;
`
//

export default Home
