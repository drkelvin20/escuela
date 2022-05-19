import React, { useState } from "react";
import axios from 'axios';


export function FormularioCalificaciones({ getCalificaciones, datosAlumnosA, datosMaterias}) {
    
    //Campos del formulario
    const [nota, setNota] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [idAlumno, setIdAlumno] = useState();
    const [idMateria, setIdMateria] = useState();
   

    //Post en la tabla Materias
    function postCalificaciones() {
        axios.post('http://localhost:3001/calificaciones',
            {
                nota: nota,
                modificadoPor: modificadoPor,
                idAlumno: idAlumno,
                idMateria: idMateria,
            })
            .then((resultado) => {
                getCalificaciones();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nota</label>
                <input type="Number" className="form-control" id="nota"
                    value={nota}
                    onChange={(e) => setNota(e.currentTarget.value)}
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
                <label className="form-label" >Alumno</label>
                <SelectAlumno setIdAlumno={setIdAlumno} datosAlumnosA={datosAlumnosA} />
            </div>
            <div className="mb-3">
                <label className="form-label" >Materia</label>
                <SelectMateria setIdMateria={setIdMateria} datosMaterias={datosMaterias} />
            </div>

            <button type="button" onClick={() => postCalificaciones()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API

function SelectAlumno({ setIdAlumno, datosAlumnosA}) {
    const opciones = datosAlumnosA.map((fila, i) => <option value={fila.idAlumno} key={i}>{fila.nombres}</option>)
    return (
        <select
            name="idAlumn" id="idAlumn" className="form-select mb-3" 
            onChange={(e) => setIdAlumno(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}

function SelectMateria({ setIdMateria, datosMaterias}) {
    
    const opciones = datosMaterias.map((fila, i) => <option value={fila.idMateria} key={i}>{fila.nombre}</option>)
  
    return (
        <select
            name="idGrado" id="idGrado" className="form-select mb-3" 
            onChange={(e) => setIdMateria(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}
