import { ReactNode, useEffect, useRef } from 'react'

import { useField } from '@unform/core'

type AuthContextProviderProps = {
  name: string
}

// import { Container } from './styles';

const Input: React.FC<AuthContextProviderProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  return (
    <>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  )
}

export default Input
