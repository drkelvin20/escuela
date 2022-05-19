import React, { useState } from "react";
import axios from 'axios';


export function FormularioMaterias({ getMaterias, datosEstados, datosGrados}) {

    //Campos del formulario
    const [nombre, setNombre] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [idEstado, setIdEstado] = useState();
    const [idGrado, setIdGrado] = useState();
   

    //Post en la tabla Materias
    function postMaterias() {
        axios.post('http://localhost:3001/materias',
            {
                nombre: nombre,
                modificadoPor: modificadoPor,
                idEstado: idEstado,
                idGrado: idGrado,
            })
            .then((resultado) => {
                getMaterias();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Materia</label>
                <input type="text" className="form-control" id="seccion"
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
            <div className="mb-3">
                <label className="form-label" >Estados</label>
                <SelectEstado setIdEstado={setIdEstado} datosEstados={datosEstados} />
            </div>
            <div className="mb-3">
                <label className="form-label" >Grado</label>
                <SelectGrado setIdGrado={setIdGrado} datosGrados={datosGrados} />
            </div>

            <button type="button" onClick={() => postMaterias()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API

function SelectEstado({ setIdEstado, datosEstados}) {
    const opciones = datosEstados.map((fila, i )=> <option value={fila.idEstado} key={i}>{fila.estado}</option>)
    return (
        <select
            name="idEstado" id="idEstado" className="form-select mb-3" 
            onChange={(e) => setIdEstado(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}

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
