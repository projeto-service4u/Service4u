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
  /* flex: 3; */
  min-width: 100%;
  flex-direction: row;
  padding: 1.5%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 1px rgba(154, 160, 185, 0.05),
    0 1px 1px rgba(166, 173, 201, 0.2);
`

export const NomeLista = styled.div`
  display: flex;
  flex: 1;
  width: 30%;
  height: 3 vh;
  font: 600 20px 'Poppins', sans-serif;
  width: 28 vw;
  align-items: flex-end;
`
export const Titulo = styled.div`
  display: flex;
  width: 30%;
  flex: 1;
  font: 600 20px 'Poppins', sans-serif;
  height: 3 vh;
  align-items: flex-end;
`
export const BotaoAdicionar = styled.div`
  display: flex;
  justify-content: end;
  height: 3 vh;
  align-items: flex-end;
  width: 30%;
  flex: 1;
`

export const ContainerProdutos = styled.div`
  display: flex;
  /* flex: 2; */
  margin-top: 10px;
  flex-direction: row;
  padding: 1.5%;
  height: 5%;
  align-items: center;
  justify-content: space-between;
  background: ${Cores.BRANCO};
  box-shadow: 0 5px 1px rgba(154, 160, 185, 0.05),
    0 1px 1px rgba(166, 173, 201, 0.2);
  select,
  option {
    font: 400 12px 'Poppins', sans-serif;
  }
`

export const DivProdutos = styled.div`
  width: 20.33%;
`

export const DivProdutosBotao = styled.div`
  width: 15%;
  button {
    width: 100%;
  }
`
export const ContainerTabela = styled.div`
  display: flex;
  /* width: 80%; */
  margin-top: 0.5%;
`

export const useStyles = makeStyles({
  root: {
    minWidth: '12vw',
    height: '3vh',
    fontSize: '12px',
    backgroundColor: `${Cores.SECUNDARIA_2_ESCURO}`,
    color: `${Cores.PRIMARIA_1_ESCURO}`,
    '&:hover': {
      backgroundColor: `${Cores.SECUNDARIA_2}`,
      color: `${Cores.PRIMARIA_1_CLARO}`
    }
  },
  table: {
    minWidth: 650
  },
  skeleton: {
    width: '100%',
    height: '50%'
  },
  tabela: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: '14px'
  }
})
