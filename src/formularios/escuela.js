import React, { useState } from "react";
import axios from 'axios';


export function FormularioEscuela({getEscuela}) {
    
    //Campos del formulario
    const [codigo, setCodigo] = useState();
    const [nombre, setNombre] = useState();
    const [modificadoPor, setModificadoPor] = useState();

    
    //Post en la tabla Centro-Educativo
    function postEscuela() {
        axios.post('http://localhost:3001/centro-educativo',
            {
                codigoCE: codigo,
                nombre: nombre,
                modificadoPor: modificadoPor
            })
            .then((resultado)=>{
                console.log(resultado.data);
                getEscuela();
            });
    }

   
    
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Código de la Escuela</label>
                <input type="text" className="form-control" id="codigoId"
                    value={codigo}
                    onChange={(e) => setCodigo(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre de la Escuela</label>
                <input type="text" className="form-control" id="nombreEscuela"
                    value={nombre}
                    onChange={(e) => setNombre(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" >Modificado Por</label>
                <input type="text" className="form-control" id="modificadoPor"
                    value={modificadoPor}
                    onChange={(e) => setModificadoPor(e.currentTarget.value)}
                />
            </div>
            <button type="button" onClick={() => postEscuela()} className="btn btn-success">Enviar</button>
        </form>
    )
}