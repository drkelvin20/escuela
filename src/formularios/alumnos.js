import React, { useState } from "react";
import axios from 'axios';


export function FormularioAlumnos({ getAlumnos, datosEstados, datosPadres, datos, datosSeccion }) {

    //Campos del formulario
    //const [idPersonal, setIdPersonal] = useState();
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [dni, setDni] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [idEstado, setIdEstado] = useState();
    const [idPadreFamilia, setIdPadreFamilia] = useState();
    const [codigoCE, setCodigoCE] = useState();
    const [idSeccion, setIdSeccion] = useState();


    //Post en la tabla Centro-Educativo
    function postAlumnos() {
        axios.post('http://localhost:3001/alumnos',
            {
                nombres: nombres,
                apellidos: apellidos,
                dni: dni,
                modificadoPor: modificadoPor,
                idEstado: idEstado,
                idPadreFamilia: idPadreFamilia,
                codigoCE: codigoCE,
                idSeccion: idSeccion
            })
            .then((resultado) => {
                getAlumnos();
            });
    }



    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nombres</label>
                <input type="text" className="form-control" id="nombres"
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
                <input type="text" className="form-control" id="identidad"
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
                <label className="form-label" >Estado</label>
                <SelectIdEstado setIdEstado={setIdEstado} datosEstados={datosEstados} />
            </div>
            <div className="mb-3">
                <label className="form-label" >Padre de Familia</label>
                <SelectPadreFamilia setIdPadreFamilia={setIdPadreFamilia} datosPadres={datosPadres} />
            </div>
           
            <div className="mb-3">
                <label className="form-label" >Centro Educativo</label>
                <SelectEscuela setCodigoCE={setCodigoCE} datos={datos} />
            </div>

            <div className="mb-3">
                <label className="form-label" >Sección</label>
                <SelectSeccion setIdSeccion={setIdSeccion} datosSeccion={datosSeccion} />
            </div>

            <button type="button" onClick={() => postAlumnos()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API


function SelectIdEstado({ setIdEstado, datosEstados}) {
    const opciones =  datosEstados.map((fila, i) => <option value={fila.idEstado} key={i}>{fila.estado} </option>)
    return (
        <select 
            name="idEstado" id="idEstado" className="form-select mb-3" 
            onChange={(e) => setIdEstado(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}

function SelectPadreFamilia({ setIdPadreFamilia, datosPadres}) {
    const opciones = datosPadres.map((fila, i) => <option value={fila.idPadreFamilia} key={i}>{fila.nombres}</option>)
    return (
        <select
            name="idTipoPersonal" id="idTipoPersonal" className="form-select mb-3" 
            onChange={(e) => setIdPadreFamilia(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}

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

function SelectSeccion({ setIdSeccion, datosSeccion}) {
    const opciones = datosSeccion.map((fila, i) => <option value={fila.idSeccion} key={i}>{fila.seccion}</option>)
    return (
        <select
            name="idSeccion" id="idSeccion" className="form-select mb-3" 
            onChange={(e) => setIdSeccion(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}