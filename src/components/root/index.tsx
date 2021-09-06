import React from 'react'

// import { Container } from './styles';
import { blue } from '@material-ui/core/colors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { AuthProvider } from './../../contexts/authContext'
import Routes from './../../routes/index'

const Root: React.FC = () => {
  return <Routes />
}

export default Root
