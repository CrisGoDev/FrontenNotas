import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import { PostData,PutData } from '../Services/Notas';
import fetchData from '../Services/GetNotas';

function Formulario({ setallNotas, handleClose,nota }) {
    const [NotaSubmit, setNotaSubmit] = useState({
        titulo: '',
        cuerpo: ''
    })
    const [error, setError] = useState(false);
    const { titulo, cuerpo } = NotaSubmit;

    const submitNota = async e => {
        e.preventDefault();
        if(nota===undefined){
            const respuesta = await PostData(NotaSubmit);
        }else{
            const respuesta = await PutData(nota);
            
        }
        fetchData(setallNotas)
        
        handleClose();

    }



    const updateState = e => {
        setNotaSubmit({
            ...NotaSubmit,
            [e.target.name]: e.target.value
        })
        if(nota!=undefined){
            if(e.target.name==="titulo"){
                nota.titulo=e.target.value;
            }else{
                nota.cuerpo=e.target.value;
            }
        }
    }

    return (
        <>
            {error ? <p className="alerta-error">Error, Revisa</p>
                : null}
            <Form onSubmit={submitNota}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    {
                        nota===undefined?
                        <Form.Control type="text" name="titulo" onChange={updateState}  placeholder="Agrega un titulo" required />
                        :<Form.Control type="text" name="titulo" onChange={updateState} value={nota.titulo} placeholder="Agrega un titulo" required />
                    }
                    
                    <Form.Text className="text-muted">
                        Recuerda usar buenas palabras
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contenido</Form.Label>
                    <FloatingLabel controlId="floatingTextarea" className="mb-3">
                        {
                            nota===undefined?
                            <Form.Control as="textarea" name="cuerpo" onChange={updateState} placeholder="Deja una nota" style={{ height: '100px' }} required />
                            :<Form.Control as="textarea" name="cuerpo" value={nota.cuerpo} onChange={updateState} placeholder="Deja una nota" style={{ height: '100px' }} required />
                        }
                        
                    </FloatingLabel>
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Formulario