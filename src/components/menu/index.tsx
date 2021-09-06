import React from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar } from '@material-ui/core'

// import { Container } from './styles'

const Menu: React.FC = () => {
  return (
    <Toolbar>
      <Link className="app-menu__link" to="/">
        Home
      </Link>
    </Toolbar>
  )
}

export default Menu
