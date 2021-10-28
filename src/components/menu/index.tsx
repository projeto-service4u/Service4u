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
            Clientes
          </Link>
          <Link className="link-menu" to="/produtos">
            Produtos
<<<<<<< HEAD
          </Link>
<<<<<<< HEAD

=======
          <Link className="link-menu" to="/home">
            Lista
          </Link>
>>>>>>> 23ff7e8 (🚧 #S4U-24 | Tabela visualizacao lista padrao)
=======
          </Link>

>>>>>>> b6b34a9 (🚧 #S4U-24 | Tratando dados para montar tabela)
          <Link className="link-menu" to="/lista-padrao">
            Lista Padrão
          </Link>
          <button className="logout" onClick={() => context.Logout()}>
            Sair
          </button>
        </MenuLink>
      </MenuContainer>
    </Toolbar>
  )
}

export default Menu
