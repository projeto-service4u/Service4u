import React from 'react'

import Container from '@material-ui/core/Container'

import Header from '../components/header/index'
// import { Container } from './styles'

const ContainerApp: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        style={{
          backgroundColor: '#F3F5F9',
          minWidth: '100vw',
          minHeight: '100vh',
          padding: '124px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}
      >
        {children}
      </Container>
    </>
  )
}

export default ContainerApp
