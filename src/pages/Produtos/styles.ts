import styled from 'styled-components'

import { Cores } from '../../assets/styles/cores'

export const Container = styled.div`
  display: flex;
  flex: 2;
  padding: 32px;
  /* justify-content: center; */
  min-height: 80vh;
  min-width: 100% !important;
  align-items: center;
  /* justify-self: center; */
  background: ${Cores.BRANCO};
`
