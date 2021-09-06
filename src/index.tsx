import React from 'react'
import ReactDOM from 'react-dom'
import './services/firebase'

import App from './App'
import Root from './components/root/index'

import './styles/index.css'
import { AuthProvider } from './contexts/authContext'
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
