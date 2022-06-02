import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import fetchData_Busca from '../Services/Busqueda'
import { useState } from 'react';
import fetchData from '../Services/GetNotas';
import { EraserFill } from 'react-bootstrap-icons';
// import IconWithTooltip from 'icon-with-tooltip';

const Busqueda = ({ setallNotas }) => {
    const [Termino, settermino] = useState({
        termino: ''
    })

    const buscar = () => {
        if (Termino.termino === '') {
            Todos();
        } else {
            fetchData_Busca(Termino, setallNotas)
        }

    }
    // Método para obtener todos los registros
    const Todos=()=>{
        fetchData(setallNotas);
    }

    // aca actualiza el termino recibiendo el valor que está escribiendo
    const updateState = e => {
        settermino({
            ...Termino,
            [e.target.name]: e.target.value
        })

    }
    return (
        <div className='busqueda'>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Busca una Nota"
                    aria-label="Nota"
                    aria-describedby="basic-addon2"
                    name='termino'
                    onChange={updateState}
                    value={Termino.termino}
                />
                <Button variant="outline-secondary" onClick={() => buscar()} id="button-addon2">
                    Buscar
                </Button>
                <EraserFill color="royalblue" className='erase' onClick={()=>{
                    settermino({termino:''})
                    Todos(); 
                }} size={35} 
                />
                
            </InputGroup>

        </div>
    )
}

export default Busqueda