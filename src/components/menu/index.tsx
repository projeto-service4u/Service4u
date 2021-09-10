import React from 'react'
import { Link } from 'react-router-dom'

import { Toolbar, Button, IconButton, Typography } from '@material-ui/core'

import s4uLogo from '../../assets/icones/s4uLogo.svg'
import { MenuContainer, MenuLink, Logo } from './styles'

const Menu: React.FC = () => {
  return (
    <Toolbar>
      <MenuContainer>
        <Logo>Services4U</Logo>
        <MenuLink>
          <Link className="link-menu" to="/">
            Cliente
          </Link>
          <Link className="link-menu" to="/produtos">
            Produto
          </Link>
          <Link className="link-menu" to="/home">
            Lista
          </Link>
        </MenuLink>
      </MenuContainer>
    </Toolbar>
  )
}

export default Menu
