import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import fetchData_Busca from '../Services/Busqueda'
import { useState } from 'react';
import fetchData from '../Services/GetNotas';

const Busqueda = ({setallNotas}) => {
    const [termino, settermino] = useState({
        termino:''
    })
    const buscar=()=>{
        if(termino.termino===''){
            fetchData(setallNotas);
        }else{
            fetchData_Busca(termino,setallNotas)
        }
        
    }


    const updateState = e => {
        settermino({
            ...termino,
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
                />
                <Button variant="outline-secondary" onClick={()=>buscar()} id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>
        </div>
    )
}

export default Busqueda