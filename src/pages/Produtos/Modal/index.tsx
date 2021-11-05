import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { useFormik } from 'formik'

import Botao from '../../../components/Botao/index'
import { database, firebase } from '../../../services/firebase'
import { formProdutoSchema } from './schema'
import { Container } from './styles'

export const ModalProdutos: React.FC<any> = props => {
  const initialValues = {
    produto: '',
    medida: ''
  }

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
      toast.success('Produto adicionado com sucesso', {
        icon: '🚀',
        theme: 'colored'
      })
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
      <ToastContainer />
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
                  <Form.Label>Nome Produto</Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="ex: Lata de tinta"
                    name="produto"
                    onChange={formik.handleChange}
                    value={formik.values.produto}
                  />
                </Col>
                <Col>
                  <Form.Label>Unidade/Medida</Form.Label>
                  <Form.Control
                    size="lg"
                    placeholder="ex: Kg / Unidade / Litros"
                    name="medida"
                    onChange={formik.handleChange}
                    value={formik.values.medida}
                  />
                </Col>
                <Col
                  style={{ textAlign: 'center', alignSelf: 'flex-end' }}
                  xs
                  lg="2"
                >
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
