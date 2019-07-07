import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import TravelSoca from './Travel-Soca'

export default () => {
  return (
    <>
      <Route path='/travels/soca' component={ TravelSoca } />
    </>
  )
}
