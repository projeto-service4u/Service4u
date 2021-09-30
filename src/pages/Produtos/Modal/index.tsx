import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import { useFormik } from 'formik'

import { database, firebase } from '../../../services/firebase'
import Botao from './../../../components/Botao/index'
import { formProdutoSchema } from './schema'
import { Container } from './styles'

export const ModalProdutos: React.FC<any> = props => {
  const initialValues = {
    produto: '',
    medida: ''
  }

  const [title, setTitle] = useState('')
  const [newRoom, setNewRoom] = useState('')
  const history = useHistory()

  useEffect(() => {
    formik.setValues({
      produto: '',
      medida: ''
    })
  }, [])

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formProdutoSchema,
    onSubmit: (values, { resetForm }) => {
      const produtosRef = database.ref('/produtos')
      produtosRef.push({
        produtoNome: values.produto,
        produtoMedida: values.medida
      })

      console.log(produtosRef)
      resetForm()
    }
  })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adicionar Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col>
                  <Form.Control
                    size="lg"
                    placeholder="Produto"
                    name="produto"
                    onChange={formik.handleChange}
                    value={formik.values.produto}
                  />
                </Col>
                <Col>
                  <Form.Control
                    size="lg"
                    placeholder="Medida"
                    name="medida"
                    onChange={formik.handleChange}
                    value={formik.values.medida}
                  />
                </Col>
                <Col xs lg="2">
                  <Button
                    size="lg"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Fechar
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}
