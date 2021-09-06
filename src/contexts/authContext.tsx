import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { auth, firebase } from '../services/firebase'

type User = {
  uid: string
  email: string
  token: string
}

type AuthContextType = {
  signed: boolean
  user: User | undefined
  Login: (email: string, senha: string) => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
const AuthContext = createContext({} as AuthContextType)

export function AuthProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, email, refreshToken } = user

        if (!email || !refreshToken) {
          throw new Error('Faltam informações da conta.')
        }

        setUser({
          uid: uid,
          email: email,
          token: refreshToken
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  async function Login(email: string, senha: string) {
    const provider = new firebase.auth.EmailAuthProvider()

    const result = await auth.signInWithEmailAndPassword(email, senha)

    if (result.user) {
      const { uid, email, refreshToken } = result.user

      if (!email || !refreshToken) {
        throw new Error('Faltam informações da conta.')
      }

      setUser({
        uid: uid,
        email: email,
        token: refreshToken
      })
      console.log('USER', user)
    } else {
      console.log('Erro')
    }
    console.log(result)
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
