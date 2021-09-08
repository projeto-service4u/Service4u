import { ButtonHTMLAttributes } from 'react'

import { BotaoContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const Botao = (props: ButtonProps) => {
  return <BotaoContainer className="button" {...props}></BotaoContainer>
}

export default Botao
