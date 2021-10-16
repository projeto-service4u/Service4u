import React from 'react'
import ReactDOM from 'react-dom'

import './services/firebase'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './assets/styles/global'
import { theme } from './assets/styles/theme'
import { AuthProvider } from './contexts/authContext'
import Root from './routes/root/index'
import './assets/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
