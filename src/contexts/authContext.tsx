import { createContext, ReactNode, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

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
  Logout: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}
const AuthContext = createContext({} as AuthContextType)

export function AuthProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()
  const history = useHistory()

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

    const result = await auth
      .signInWithEmailAndPassword(email, senha)
      .then(userCredential => {
        if (userCredential.user) {
          const { uid, email, refreshToken } = userCredential.user

          if (!email || !refreshToken) {
            throw new Error('Faltam informações da conta.')
          }

          return setUser({
            uid: uid,
            email: email,
            token: refreshToken
          })
        }
      })
      .catch(error => {
        toast.error('Usuário ou Senha Inválidos')

        // ..
      })
  }

  async function Logout() {
    setUser({
      uid: '',
      email: '',
      token: ''
    })
    localStorage.clear()
    firebase.auth().signOut()
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
