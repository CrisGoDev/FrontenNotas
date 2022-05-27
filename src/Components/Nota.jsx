import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Formulario from './Formulario';

function Nota({ show, setShow, estado, nota, setallNotas, setestado }) {

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {estado === 'nueva' ? <Modal.Title>Agrega un Nota</Modal.Title> : null}
          {estado === 'edita' ? <Modal.Title>Edita tu Nota</Modal.Title> : null}
          {estado === 'check' ? <Modal.Title>Revisa tu Nota</Modal.Title> : null}

        </Modal.Header>
        <Modal.Body>
          {
            nota != undefined && estado === 'check' && (
              <>
                <Card>
                  <Card.Body>
                    <Card.Title>{nota.titulo}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{nota.fecha}</Card.Subtitle>
                    <Card.Text>
                      {nota.cuerpo}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Button variant="info" className='margen-arriba' onClick={() => setestado('edita')}>
                  Editar
                </Button>
              </>
            )
          }
          {
            estado === 'nueva' && (
              <Formulario setallNotas={setallNotas} handleClose={handleClose} />
            )
          }

          {
            estado === 'edita' && (
              <Formulario setallNotas={setallNotas} handleClose={handleClose} nota={nota}/>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>



        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Nota