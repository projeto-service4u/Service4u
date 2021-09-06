import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../pages/login'

// import { Container } from './styles';
import { AuthProvider } from './../contexts/authContext'

const RotaLogin: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" component={Login} />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RotaLogin
