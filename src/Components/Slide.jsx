import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slide = () => {
    const [open, setopen] = useState(null);


    const change = () => {

        if (open === "show") {
            setopen(null)
            return;
        } else {
            setopen("show");
        }
    }

    return (
        <>
            <div className={`collapse ${open}`}  id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">
                    <Link to="/Notas">Revisar Notas</Link>                    
                    </h5>
                    <h5 className="text-white h4">
                    <Link to="/">Home</Link>                    
                    </h5>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler up" onClick={()=>change()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                </div>
            </nav>
        </>
    )
};

export default Slide;
