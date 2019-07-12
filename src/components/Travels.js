import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import TravelSoca from './Travel-Soca'

export default () => {
  return (
    <STravels>
      <Route path='/travels/soca' component={ TravelSoca } />
    </STravels>
  )
}

const STravels = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: [start] 5vw [center-start] 1fr [center-end] 5vw [end];
  grid-template-rows: min-content;
  justify-content: center;
`
