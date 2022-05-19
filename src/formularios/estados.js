import React, { useState } from "react";
import axios from 'axios';


export function FormularioEstados({getEstados}) {
    
    //Campos del formulario
    const [idEstado, setIdEstado] = useState();
    const [estado, setEstado] = useState();
    const [modificadoPor, setModificadoPor] = useState();

    
    //Post en la tabla estados
    function postEstados() {
        axios.post('http://localhost:3001/estados',
            {
                estado: estado,
                modificadoPor: modificadoPor
            })
            .then((resultado)=>{
                console.log(resultado.data);
                getEstados();
            });
    }

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Id Estado</label>
                <input type="Number" className="form-control" id="idEstado"
                    value={idEstado}
                    onChange={(e) => setIdEstado(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Estado</label>
                <input type="text" className="form-control" id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" >Modificado Por</label>
                <input type="text" className="form-control" id="modificadoPorEstados"
                    value={modificadoPor}
                    onChange={(e) => setModificadoPor(e.currentTarget.value)}
                />
            </div>
            <button type="button" onClick={() => postEstados()} className="btn btn-success">Enviar</button>
        </form>
    )
}