import React from 'react'

import { AppBar } from '@material-ui/core'

import Menu from '../menu'

const Header: React.FC = () => {
  return (
    <AppBar position="absolute">
      <Menu />
    </AppBar>
  )
}

export default Header
