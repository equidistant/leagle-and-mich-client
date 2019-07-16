import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <SFooter>
      <SCopyright>© 2019 leagle & mich </SCopyright>
    </SFooter>
  )
}

const SFooter = styled.div`
  grid-column: 1 / -1;
  display: grid;
  height: 5rem;
  padding: 1rem;
  color: white;
  background-image: linear-gradient(to bottom, #0000004B, #0000004B);
`

const SCopyright = styled.div`
  justify-self: center;
  align-self: center;
  font-size: 1.5rem;
`
