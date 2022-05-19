import React, { useState } from "react";
import axios from 'axios';


export function FormularioSeccion({ getSeccion, datosGrados}) {

    //Campos del formulario
    const [seccion, setSeccion] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [idGrado, setIdGrado] = useState();
   

    //Post en la tabla Centro-Educativo
    function postSeccion() {
        axios.post('http://localhost:3001/secciones',
            {
                seccion: seccion,
                modificadoPor: modificadoPor,
                idGrado: idGrado,
                
            })
            .then((resultado) => {
                getSeccion();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Sección</label>
                <input type="text" className="form-control" id="seccion"
                    value={seccion}
                    onChange={(e) => setSeccion(e.currentTarget.value)}
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
                <label className="form-label" >Grado</label>
                <SelectGrado setIdGrado={setIdGrado} datosGrados={datosGrados} />
            </div>

            <button type="button" onClick={() => postSeccion()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API
function SelectGrado({ setIdGrado, datosGrados}) {
    const opciones = datosGrados.map((fila, i) => <option value={fila.idGrado} key={i}>{fila.grado}</option>)
    return (
        <select
            name="idGrado" id="idGrado" className="form-select mb-3" 
            onChange={(e) => setIdGrado(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}
