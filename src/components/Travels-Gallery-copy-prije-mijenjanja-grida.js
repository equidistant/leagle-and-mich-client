import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { slideUp } from '../animations'
import { BedImg, MapImg } from '../images'

class TravelsGallery extends Component {
  state = {
    images: getImages(),
    visible: []
  }
  cards = []
  observers= []

  render () {
    return (
      <STravelCards>
        <SHeader>Our Travels</SHeader>
        <STravelCardsGrid>
          {this.renderTravels(this.state)}
        </STravelCardsGrid>
      </STravelCards>
    )
  }

  componentDidMount () {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.15, 1.0]
    }

    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.15) {
          let visible = this.state.visible
          visible[entry.target.id] = true
          this.setState({ visible })
        } else if (entry.intersectionRatio === 0) {
          let visible = this.state.visible
          visible[entry.target.id] = false
          this.setState({ visible })
        }
      })
    }

    this.cards.forEach(card => {
      const observer = new IntersectionObserver(intersectionCallback, observerOptions)
      observer.observe(card)
      this.observers.push(observer)
    })
    const visible = [...Array(14)].map(() => false)
    this.setState({
      visible: visible
    })
  }

  renderTravels = ({ images }) =>
    images.map((img, index) =>
    <STravelCard key={index} id={index} ref={card => this.cards.push(card)} visible={this.state.visible[index]}>
      <SImg img={img}/>
      <SImgOverlay>
        <SImgOverlayRow><SImgOverlayIcon src={MapImg} /><SImgOverlayText>Soča, Slovenia</SImgOverlayText></SImgOverlayRow>
        <SImgOverlayRow><SImgOverlayIconLarger src={BedImg} /><SImgOverlayText>6 days, 20. - 25.6.2019</SImgOverlayText></SImgOverlayRow>
        <SImgOverlayRow><SImgOverlayText>#roadtrip #camping #river #kayak #rafting #sup </SImgOverlayText></SImgOverlayRow>
      </SImgOverlay>
    </STravelCard>)
}

const STravelCards = styled.div`
  grid-column: center-start / center-end;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  color: white;
`

const SHeader = styled.h1`
  width: max-content;
  margin: 0 auto 2.5rem auto;
`

const STravelCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, min-content));
  grid-gap: 2rem;

`

const SImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  background-position: center;
  opacity: 1;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s ease-in;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 0.5rem;
`

const SImgOverlay = styled.div`
  transition: .5s ease-out;
  width: 22rem;
  opacity: 0;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`

const STravelCard = styled.div`
  height: 15rem;
  ${props => props.visible && css`
    animation: ${slideUp} 0.4s ease-out;
    animation-fill-mode: forwards;
  `}
  opacity: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15rem;

  &:hover ${SImg} {
    opacity: 0.3;
  }
  &:hover ${SImgOverlay}{
    opacity: 1;
  }
`
// ${props => props.visible && css`animation: ${slideUp} 0.5s linear;`}
//   ${props => props.visible && css`animation: ${slideUp} 0.5s linear;`}

const SImgOverlayRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SImgOverlayText = styled.div`
  color: white;
  z-index: 1;
`

const SImgOverlayIcon = styled.img`
  z-index: 1;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`

const SImgOverlayIconLarger = styled.img`
  z-index: 1;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.5rem;
`

const getImages = () => [...Array(14)].map((img, index) => {return { id: index, src: `${process.env.REACT_APP_SERVER}/images/travels/${index + 1}.jpg` }})

export default TravelsGallery
