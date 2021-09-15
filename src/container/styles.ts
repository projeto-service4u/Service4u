import styled, { css } from 'styled-components'

import { Cores } from '../assets/styles/cores'

export const Container = styled.div`
  ${({ theme }) => css`
    /* max-width: 150rem; */
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem;
    /* margin-top: 100px; */
  `}
`

export const Section = styled.div`
  display: flex;
  max-height: 86vh;
  min-height: 70vh;
  /* background: ${Cores.BRANCO}; */
  /* box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5); */
  border-radius: 10px;
`
