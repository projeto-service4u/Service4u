import React, { useContext } from 'react'

import ContainerApp from '.'
import AuthContext, { AuthProvider } from '../contexts/authContext'

const App: React.FC = ({ children }) => {
  const { signed } = useContext(AuthContext)
  return (
    <AuthProvider>
      <ContainerApp>{children}</ContainerApp>
    </AuthProvider>
  )
}

export default App
