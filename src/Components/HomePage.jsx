import React from 'react'
import { useEffect, useState } from 'react';
import fetchLastData from '../Services/Notas';
import '../App.css';
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom';

function HomePage() {
    const [notas, setnotas] = useState([]);


    useEffect(() => {
        fetchLastData(setnotas);
    }, []);

    return (
        <>
            <div className='Titulo'>
                Bienvenido a tu Bloc de Notas
            </div>
            <div className='Titulo Titulo_sub'>
                Revisa tus ultimas notas
            </div>
            {
                notas.length>0?
                    <Accordion className='margen-abajo'>
                        {notas.map((nota) => (
                            <Accordion.Item eventKey={nota.id} key={nota.id}>
                                <Accordion.Header>{nota.titulo}</Accordion.Header>
                                <Accordion.Body>
                                    {nota.cuerpo}
                                    hahah
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    : null
            }
            {
                notas.length<1&&(
                   <div>
                    <div>Ups, Actualmente no hay Notas!</div>
                    <Link to="/Notas">Añade una</Link>
                   </div>
                )
            }
        </>
    )
}

export default HomePage