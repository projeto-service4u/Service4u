import React from 'react'

import { AppBar } from '@material-ui/core'

import Menu from '../menu'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Menu />
    </AppBar>
  )
}

export default Header
