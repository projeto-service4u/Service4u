import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@material-ui/core'

import S4U from '../../assets/imagens/S4U.svg'
import AuthContext from '../../contexts/authContext'
import { MenuContainer, MenuLink, Logo } from './styles'

const Menu: React.FC = () => {
  const context = useContext(AuthContext)
  return (
    <Toolbar>
      <MenuContainer>
        <Logo>
          <img src={S4U} alt="Logo" />
        </Logo>
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
          <Link className="link-menu" to="/lista-padrao">
            Lista Padrão
          </Link>
          <button className="logout" onClick={() => context.Logout()}>
            sair
          </button>
        </MenuLink>
      </MenuContainer>
    </Toolbar>
  )
}

export default Menu
