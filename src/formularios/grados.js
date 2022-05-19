import React, { useState } from "react";
import axios from 'axios';


export function FormularioGrados({ getGrados, datos}) {

    //Campos del formulario
    const [grado, setGrado] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [codigoCE, setCodigoCE] = useState();
   


    //Post en la tabla Centro-Educativo
    function postGrados() {
        axios.post('http://localhost:3001/grados',
            {
                grado: grado,
                modificadoPor: modificadoPor,
                codigoCE: codigoCE,
                
            })
            .then((resultado) => {
                getGrados();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Grado</label>
                <input type="text" className="form-control" id="grado"
                    value={grado}
                    onChange={(e) => setGrado(e.currentTarget.value)}
                />
            </div>
            
            <div className="mb-3">
                <label className="form-label" >Modificado Por</label>
                <input type="text" className="form-control" id="modificadoPor"
                    value={modificadoPor}
                    onChange={(e) => setModificadoPor(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" >Centro Educativo</label>
                <SelectEscuela setCodigoCE={setCodigoCE} datos={datos} />
            </div>

            <button type="button" onClick={() => postGrados()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API

function SelectEscuela({ setCodigoCE, datos}) {
    const opciones = datos.map((fila, i) => <option value={fila.codigoCE} key={i}>{fila.nombre}</option>)
    return (
        <select
            name="idCodigoCE" id="idCodigoCE" className="form-select mb-3" 
            onChange={(e) => setCodigoCE(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}
