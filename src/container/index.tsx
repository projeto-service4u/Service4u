import React from 'react'

// import Container from '@material-ui/core/Container'

import Header from '../components/header/index'
import { Container, Section } from './styles'

const ContainerApp: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Section>{children}</Section>
      </Container>
    </>
  )
}

export default ContainerApp
