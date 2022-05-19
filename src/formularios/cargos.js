import React, { useState } from "react";
import axios from 'axios';


export function FormularioCargos({getCargos}) {
    
    //Campos del formulario
    const [idCargo, setIdCargo] = useState();
    const [cargo, setCargo] = useState();
    const [modificadoPor, setModificadoPor] = useState();

    
    //Post en la tabla Centro-Educativo
    function postCargo() {
        axios.post('http://localhost:3001/cargo',
            {
                idCargo: idCargo,
                cargo: cargo,
                modificadoPor: modificadoPor
                
            })
            .then((resultado)=>{
                console.log(resultado.data);
                getCargos();
            });
    }

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Id</label>
                <input type="Number" className="form-control" id="idCargo"
                    value={idCargo}
                    onChange={(e) => setIdCargo(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Cargo</label>
                <input type="text" className="form-control" id="cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" >Modificado Por</label>
                <input type="text" className="form-control" id="modificadoPorC"
                    value={modificadoPor}
                    onChange={(e) => setModificadoPor(e.currentTarget.value)}
                />
            </div>
            <button type="button" onClick={() => postCargo()} className="btn btn-success">Enviar</button>
        </form>
    )
}