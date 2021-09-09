import React from 'react'

import { AppBar } from '@material-ui/core'

import Menu from '../Menu'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Menu />
    </AppBar>
  )
}

export default Header
