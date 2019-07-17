import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { slideUp, slideLeft, slideRight } from '../animations'
import { BedImg, MapImg } from '../images'

class TravelsGallery extends Component {
  state = {
    images: getImages(),
    visible: []
  }
  cards = []
  observers= []
  sizes = {
    width: {
      large: '51rem',
      normal: '45rem',
      small: '36rem',
      smallest: '30rem'
    },
    height: {
      large: '34rem',
      normal: '30rem',
      small: '24rem',
      smallest: '20rem'
    }
  }
  render () {
    return (
      <STravelCards>
        <SHeader>Recent Travel Blogs</SHeader>
        <STravelCardsGrid width={this.sizes.width} height={this.sizes.height}>
          {this.renderTravels(this.state)}
        </STravelCardsGrid>
      </STravelCards>
    )
  }
//         <SHeader>Our Travels</SHeader>
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
        <SImgOverlayRowLocation><SImgOverlayIcon src={MapImg} /><SImgOverlayText>Soča, Slovenia</SImgOverlayText></SImgOverlayRowLocation>
        <SImgOverlayRowLength><SImgOverlayIconLarger src={BedImg} /><SImgOverlayText>6 days, 20. - 25.6.2019</SImgOverlayText></SImgOverlayRowLength>
        <SImgOverlayRowTags><SImgOverlayText>#roadtrip #camping #river #kayak #rafting #sup </SImgOverlayText></SImgOverlayRowTags>
      </SImgOverlay>
    </STravelCard>)
}

const STravelCards = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3 / 4;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  color: white;
`

const SHeader = styled.p`
  width: max-content;
  font-size: 3.5rem;
  margin: 2.5rem auto 4rem auto;
`

const STravelCardsGrid = styled.div`
  display: grid
  grid-template-columns: repeat(auto-fit, ${props => props.width.large});
  grid-template-rows: repeat(auto-fit, ${props => props.height.large});
  @media screen and (max-width: 1760px) {
    grid-template-columns: repeat(auto-fit, ${props => props.width.normal});
    grid-template-rows: repeat(auto-fit, ${props => props.height.normal});
  }
  @media screen and (max-width: 1560px) {
    grid-template-columns: repeat(auto-fit, ${props => props.width.large});
    grid-template-rows: repeat(auto-fit, ${props => props.height.large});
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, ${props => props.width.normal});
    grid-template-rows: repeat(auto-fit, ${props => props.height.normal});
  }
  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(auto-fit, ${props => props.width.small});
    grid-template-rows: repeat(auto-fit, ${props => props.height.small});
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fit, 60vw);
  }
  grid-gap: 2rem;
  justify-content: center;
`

const SImg = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  background-position: center;
  opacity: 1;
  width: 100%;
  backface-visibility: hidden;
  transition: all 0.5s ease-in;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 0.5rem;
`

const SImgOverlay = styled.div`
  transition: .5s ease-out;
  width: 100%;
  opacity: 0;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`

const SImgOverlayRowLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SImgOverlayRowLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SImgOverlayRowTags = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`

const STravelCard = styled.div`
  ${props => props.visible && css`
    animation: ${slideUp} 0.4s ease-out;
    animation-fill-mode: forwards;
  `}
  opacity: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100%;

  &:hover ${SImg} {
    opacity: 0.3;
    cursor: pointer;
  }
  &:hover ${SImgOverlay}{
    opacity: 1;
    cursor: pointer;
  }
  &:hover ${SImgOverlayRowLocation} {
    animation: ${slideRight} 0.5s ease-out;
    animation-fill-mode: forwards;
  }
  &:hover ${SImgOverlayRowLength} {
    animation: ${slideLeft} 0.5s ease-out;
    animation-fill-mode: forwards;
  }
  &:hover ${SImgOverlayRowTags} {
    animation: ${slideRight} 0.5s ease-out;
    animation-fill-mode: forwards;
  }
`
const SImgOverlayText = styled.div`
  color: white;
  z-index: 1;
  font-size: 1.8rem;
`

const SImgOverlayIcon = styled.img`
  z-index: 1;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
`

const SImgOverlayIconLarger = styled.img`
  z-index: 1;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 0.5rem;
`

const getImages = () => [...Array(6)].map((img, index) => {return { id: index, src: `${process.env.REACT_APP_SERVER}/images/travels/${index + 1}.jpg` }})

export default TravelsGallery
