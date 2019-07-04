import React, { Component } from 'react'
import styled from 'styled-components'

class Travels extends Component {
  state = {
    images: getImages()
  }
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

  renderTravels = ({ images }) =>
    images.map((img, index) =>
    <STravelCard key={index}>
      <SImg img={img}/>
      <SImgOverlay>
        <SImgOverlayText>Hello</SImgOverlayText>
      </SImgOverlay>
    </STravelCard>)
}

const STravelCards = styled.div`
  grid-column: center-start / center-end;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

const SHeader = styled.h1`
  width: max-content;
  margin: 0 auto 2.5rem auto;
`

const STravelCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, min-content));
  grid-gap: 2rem;
  justify-content: center;
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
  display: block;

`

const SImgOverlay = styled.div`
  transition: .5s ease-out;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`

const STravelCard = styled.div`
  height: 15rem;
  position: relative;

  &:hover ${SImg} {
    opacity: 0.3;
  }
  &:hover ${SImgOverlay}{
    opacity: 1;
  }
`



const SImgOverlayText = styled.div`
  color: black;
`

const getImages = () => [...Array(10)].map((img, index) => {return { id: index, src: `http://localhost:4000/image/${index + 1}.jpg` }})

export default Travels
