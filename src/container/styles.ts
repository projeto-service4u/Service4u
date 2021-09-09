import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem;
    /* margin-top: 100px; */
  `}
`

export const Section = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: center;
`
