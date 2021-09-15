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
            {props.cabecalho.map(index => (
              <th>{index}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Paper>
  )
}

export default Tabela
