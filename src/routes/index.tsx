import React, { useContext } from 'react'

import AuthContext from '../contexts/authContext'
import RotaLogin from './rotaLogin'
import RotasInternas from './rotasInternas'

// import { Container } from './styles';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)
  console.log('🚀 ~ file: index.tsx ~ line 11 ~ signed', signed)

  return signed ? <RotasInternas /> : <RotaLogin />
}

export default Routes
