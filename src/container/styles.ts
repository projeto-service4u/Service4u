import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 150rem;
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem;
    /* margin-top: 100px; */
  `}
`

export const Section = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
`
