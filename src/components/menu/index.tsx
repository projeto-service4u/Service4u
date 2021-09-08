import React from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@material-ui/core'

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
