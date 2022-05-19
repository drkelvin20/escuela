import React, { useState } from "react";
import axios from 'axios';


export function FormularioPersonal({ getPersonal, datosTipoPersonal, datosEstados, datos, datosCargo }) {

    //Campos del formulario
    //const [idPersonal, setIdPersonal] = useState();
    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [dni, setDni] = useState();
    const [correo, setCorreo] = useState();
    const [modificadoPor, setModificadoPor] = useState();
    const [idTipoPersonal, setIdTipoPersonal] = useState();
    const [idEstado, setIdEstado] = useState();
    const [codigoCE, setCodigoCE] = useState();
    const [idCargo, setIdCargo] = useState();


    //Post en la tabla Centro-Educativo
    function postPersonal() {
        axios.post('http://localhost:3001/personal',
            {
                nombres: nombres,
                apellidos: apellidos,
                dni: dni,
                correo: correo,
                modificadoPor: modificadoPor,
                idTipoPersonal: idTipoPersonal,
                idEstado: idEstado,
                codigoCE: codigoCE,
                idCargo: idCargo
            })
            .then((resultado) => {
                getPersonal();
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
                <label className="form-label">Correo Electrónico</label>
                <input type="text" className="form-control" id="apellidos"
                    value={correo}
                    onChange={(e) => setCorreo(e.currentTarget.value)}
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
                <label className="form-label" >Tipo de Personal</label>
                <SelectIdTipoPersonal setIdTipoPersonal={setIdTipoPersonal} datosTipoPersonal={datosTipoPersonal} />
            </div>
            <div className="mb-3">
                <label className="form-label" >Estado</label>
                <SelectIdEstado setIdEstado={setIdEstado} datosEstados={datosEstados} />
            </div>

            <div className="mb-3">
                <label className="form-label" >Centro Educativo</label>
                <SelectEscuela setCodigoCE={setCodigoCE} datos={datos} />
            </div>

            <div className="mb-3">
                <label className="form-label" >Cargo</label>
                <SelectCargo setIdCargo={setIdCargo} datosCargo={datosCargo} />
            </div>

            <button type="button" onClick={() => postPersonal()} className="btn btn-success">Enviar</button>
        </form>


    )
}

//Funciones para generar los input seleccionables desde la API
function SelectIdTipoPersonal({ setIdTipoPersonal, datosTipoPersonal}) {
    const opciones = datosTipoPersonal.map((fila, i)=> <option value={fila.idTipoPersonal} key={i}>{fila.tipo}</option>)
    return (
        <select
            name="idTipoPersonal" id="idTipoPersonal" className="form-select mb-3" 
            onChange={(e) => setIdTipoPersonal(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}

function SelectIdEstado({setIdEstado, datosEstados}) {
    const opciones = datosEstados.map((fila, i) => <option value={fila.idEstado} key={i}>{fila.estado}</option>)
    return (
        <select
            name="idEstado" id="idEstado" className="form-select mb-3" 
            onChange={(e) => setIdEstado(e.currentTarget.value)}>
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

function SelectCargo({ setIdCargo, datosCargo}) {
    const opciones = datosCargo.map((fila, i) => <option value={fila.idCargo} key={i}>{fila.cargo}</option>)
    return (
        <select
            name="idCargo" id="idCargo" className="form-select mb-3" 
            onChange={(e) => setIdCargo(e.currentTarget.value)}>
            <option value={0}>Seleccionar una opción</option>
            {opciones}
        </select>
    );
}


