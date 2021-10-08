import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from './styles'
import { Column, PropsTable } from './tipos'

const useStyles = makeStyles({
  root: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: '14px'
  }
})
const Tabela: React.FC<PropsTable> = (props, ...rest) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table
        striped={true}
        bordered={true}
        borderless={true}
        hover={true}
        responsive="sm"
      >
        <thead>
          <tr>
            {props.cabecalho.map((index, key) => (
              <th key={key.toString()}>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.dados.map((dados, id) => (
            <tr key={id + 1}>
              <td key={id + 2}>{dados.nome}</td>
              <td key={id}>{dados.medida}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Paper>
  )
}

export default Tabela
