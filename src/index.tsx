import React from 'react'
import ReactDOM from 'react-dom'

import './services/firebase'

import GlobalStyle from './assets/styles/global'
import { AuthProvider } from './contexts/authContext'
import Root from './routes/root/index'
import './assets/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
