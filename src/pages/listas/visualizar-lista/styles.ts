import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import { Cores } from '../../../assets/styles/cores'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`

export const ContainerAcoes = styled.div`
  display: flex;
  /* flex: 2; */
  padding: 1.5%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 1px rgba(154, 160, 185, 0.05),
    0 1px 1px rgba(166, 173, 201, 0.2);
`

export const BotaoAdicionar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 27%;
`

export const Titulo = styled.div`
  display: flex;
  font: 600 20px 'Poppins', sans-serif;
`

export const DivProdutos = styled.div`
  width: 30%;
`

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',

    minHeight: '3vh',
    fontSize: '12px',
    backgroundColor: `${Cores.SECUNDARIA_2_ESCURO}`,
    color: `${Cores.PRIMARIA_1_ESCURO}`,
    '&:hover': {
      backgroundColor: `${Cores.SECUNDARIA_2}`,
      color: `${Cores.PRIMARIA_1_CLARO}`
    }
  },
  voltar: {
    display: 'flex',
    justifyContent: 'space-between',

    minHeight: '3vh',
    fontSize: '12px',
    backgroundColor: `${Cores.PRIMARIA_1}`,
    color: `${Cores.BRANCO}`,
    '&:hover': {
      backgroundColor: `${Cores.PRIMARIA_2_CLARO}`,
      color: `${Cores.BRANCO}`
    }
  },
  table: {
    minWidth: 650
  },
  skeleton: {
    width: '100%',
    height: '50%'
  }
})
