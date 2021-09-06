import { ButtonHTMLAttributes } from 'react'

import styled from 'styled-components'

import { Cores } from '../../styles/cores'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const BotaoContainer = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${Cores.PRIMARIA_1};
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
