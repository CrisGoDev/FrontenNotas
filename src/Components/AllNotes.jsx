import Nota from './Nota'
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import fetchData from '../Services/GetNotas';
import Toast from 'react-bootstrap/Toast'
import DropdownList from './Dropdown'
import Busqueda from './Busqueda';



function AllNotes() {
    const [estado, setestado] = useState()
    const [visibilidad, setVisibilidad] = useState(false)
    const [allNotas, setallNotas] = useState([])
    const [nota, setnota] = useState();
    const [send, setsend] = useState();
    const [ordenNota, setordenNota] = useState("Mas viejos Primero")

    const handleNew = () => {
        setVisibilidad(true);
        setestado("nueva")
        setnota(null)
    };

    const handleSee = (nota_lista) => {
        setVisibilidad(true);
        setestado("check")
        setnota(nota_lista)
    };

    useEffect(() => {
        fetchData(setallNotas);
    }, [])

    useEffect(() => {
        fetchData(setallNotas);
    }, [send])

    useEffect(() => {
        var CopiaNotas = [...allNotas];
        if (ordenNota === 'Mas nuevos primero') {
            setallNotas(CopiaNotas.reverse());
        } if (ordenNota === 'Titulo') {
            function SortArray(x, y) {
                if (x.titulo < y.titulo) { return -1; }
                if (x.titulo > y.titulo) { return 1; }
                return 0;
            }

            const ordenados = CopiaNotas.sort(SortArray);
            setallNotas(ordenados);
        }
        if (ordenNota === "Mas viejos Primero") {
            fetchData(setallNotas);
        }
    }, [ordenNota])

    const FormatDate = (fecha) => {
        var date = new Date(fecha);
        return date.toLocaleString();
    }

    return (
        <>
            {/* Acá renderiza el modal y pasa todos los props necesarios para su función */}
            {visibilidad ? <Nota show={visibilidad} nota={nota} estado={estado} setallNotas={setallNotas} setShow={setVisibilidad} setestado={setestado} /> : null}
            <Busqueda setallNotas={setallNotas} />
            <Button variant="primary" className='margen-abajo' onClick={() => handleNew()}>
                Agrega una nota
            </Button>
            <DropdownList setordenNota={setordenNota} ordenNota={ordenNota} />
            <Nota />
            <ListGroup as="ol" className='margen-abajo-lista' numbered>
                {
                    allNotas.length > 0 && (
                        allNotas.map((not) => (
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                key={not.id}
                                onClick={() => handleSee(not)}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{not.titulo}</div>
                                    {not.cuerpo}

                                    <div className="fw-bold"> La fecha fue: {FormatDate(not.fecha)}</div>

                                </div>
                                <Badge bg="primary" pill>
                                    Presiona y mira!
                                </Badge>
                            </ListGroup.Item>
                        ))
                    )
                }

                {
                    allNotas.length === 0 && (
                        <Toast>
                            <Toast.Header>
                                <strong className="me-auto">No hay Notas</strong>
                            </Toast.Header>
                            <Toast.Body>Añade una nota</Toast.Body>
                        </Toast>
                    )
                }
            </ListGroup>
        </>
    )
}

export default AllNotes