import React from 'react'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropdownList = ({setordenNota,ordenNota}) => {
    const TipoOrden=['Fecha','Titulo','Default']
    return (
        <>
            <Dropdown className='margen-abajo'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {ordenNota}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setordenNota(TipoOrden[0])} >{TipoOrden[0]}</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setordenNota(TipoOrden[1])} >{TipoOrden[1]}</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setordenNota(TipoOrden[2])} >{TipoOrden[2]}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropdownList