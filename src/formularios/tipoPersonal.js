import React, { useState } from "react";
import axios from 'axios';


export function FormularioTipoPersonal({getTipoPersonal}) {
    
    //Campos del formulario
    const [idTipoPersonal, setTipoPersonal] = useState();
    const [tipo, setTipo] = useState();
    const [modificadoPor, setModificadoPor] = useState();

    
    //Post en la tabla Tipo de Personal
    function postTipoPersonal() {
        axios.post('http://localhost:3001/tipo-personal',
            {
                idTipoPersonal: idTipoPersonal,
                tipo: tipo,
                modificadoPor: modificadoPor
            })
            .then((resultado)=>{
                console.log(resultado.data);
                getTipoPersonal();
            });
    }

   
    
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Id Estado</label>
                <input type="Number" className="form-control" id="idTipoPersonal"
                    value={idTipoPersonal}
                    onChange={(e) => setTipoPersonal(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Tipos de Personal</label>
                <input type="text" className="form-control" id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" >Modificado Por</label>
                <input type="text" className="form-control" id="modificadoPorEstados"
                    value={modificadoPor}
                    onChange={(e) => setModificadoPor(e.currentTarget.value)}
                />
            </div>
            <button type="button" onClick={() => postTipoPersonal()} className="btn btn-success">Enviar</button>
        </form>
    )
}