import React, { useContext } from 'react'

import AuthContext from '../contexts/authContext'
import RotaLogin from './rotaLogin'
import RotasInternas from './rotasInternas'

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)

  return signed ? <RotasInternas /> : <RotaLogin />
}

export default Routes
