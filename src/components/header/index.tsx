import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'

import Menu from '../menu'
import { HeaderContainer, SpanLogo } from './styles'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Menu />
    </AppBar>
  )
}

export default Header
