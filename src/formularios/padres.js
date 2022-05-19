import React, { useState } from "react";
import axios from 'axios';


export function FormularioPadres({ getPadres, datos}) {

    //Campos del formulario
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [dni, setDni] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [codigoCE, setIdCodigoCE] = useState();
   

    //Post en la tabla Centro-Educativo
    function postPadres() {
        axios.post('http://localhost:3001/padres-familia',
            {
                nombres: nombres,
                apellidos: apellidos,
                dni: dni,
                modificadoPor: modificadoPor,
                codigoCE: codigoCE,
                
            })
            .then((resultado) => {
                getPadres();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre"
                    value={nombres}
                    onChange={(e) => setNombres(e.currentTarget.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.currentTarget.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Identidad</label>
                <input type="text" className="form-control" id="dni"
                    value={dni}
                    onChange={(e) => setDni(e.currentTarget.value)}
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
                <label className="form-label">Escuela</label>
                <SelectEscuela setIdCodigoCE={setIdCodigoCE} datos={datos} />
            </div>

            <button type="button" onClick={() => postPadres()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API
function SelectEscuela({ setIdCodigoCE, datos}) {
    const opciones = datos.map((fila, i) => <option value={fila.codigoCE} key={i}>{fila.nombre}</option>)
    return (
        <select
            name="escuela" id="escuela" className="form-select mb-3" 
            onChange={(e) => setIdCodigoCE(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}
