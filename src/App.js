import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormularioEscuela } from './formularios/escuela';
import { FormularioEstados } from './formularios/estados';
import { FormularioTipoPersonal } from './formularios/tipoPersonal';
import { FormularioCargos } from './formularios/cargos';
import { FormularioPersonal } from './formularios/personal';
import { FormularioGrados } from './formularios/grados';
import { FormularioSeccion } from './formularios/secciones'
import { FormularioPadres } from './formularios/padres';
import { FormularioMaterias } from './formularios/materias';
import { FormularioAlumnos } from './formularios/alumnos'
import { FormularioCalificaciones} from './formularios/calificaciones';
import { TablaEscuela } from './tablas/tabla-escuela';
import { TablaEstados } from './tablas/tabla-estados';
import { TablatipoPersonal } from './tablas/tabla-tipo-personal';
import { TablaCargos } from './tablas/tabla-cargo';
import { TablaPersonal } from './tablas/tabla-personal';
import { TablaGrados } from './tablas/tabla-grados';
import { TablaSeccion } from './tablas/tabla-seccion';
import { TablaPadres } from './tablas/tabla-padres';
import { TablaMaterias } from './tablas/tabla-materias';
import { TablaAlumnos } from './tablas/tabla-alumnos';
import { TablaCalificaciones} from './tablas/tabla-calificaciones'



function App() {
  const { isAuthenticated, logout, user } = useAuth0();

  const [datos, setDatos] = useState([]);
  const [datosEstados, setDatosEstados] = useState([]);
  const [datosTipoPersonal, setDatosTipoPersonal] = useState([]);
  const [datosCargo, setDatosCargo] = useState([]);
  const [datosPersonal, setDatosPersonal] = useState([]);
  const [datosGrados, setDatosGrados] = useState([]);
  const [datosSeccion, setDatosSeccion] = useState([]);
  const [datosPadres, setDatosPadres] = useState([]);
  const [datosMaterias, setDatosMaterias] = useState([]);
  const [datosAlumnos, setDatosAlumnos] = useState([]);
  const [datosAlumnosA, setdatosAlumnosA] = useState([]);
  const [datosCalificaciones, setDatosCalificaciones] = useState([]);
  //UseStates para los DELETE
  const [datos1, setDatos1] = useState([]);
  const [datosEstados1, setDatosEstados1] = useState([]);
  const [datosTipoPersonal1, setDatosTipoPersonal1] = useState([]);
  const [datosCargo1, setDatosCargo1] = useState([]);
  const [datosPersonal1, setDatosPersonal1] = useState([]);
  const [datosGrados1, setDatosGrados1] = useState([]);
  const [datosSeccion1, setDatosSeccion1] = useState([]);
  const [datosPadres1, setDatosPadres1] = useState([]);
  const [datosMaterias1, setDatosMaterias1] = useState([]);
  const [datosAlumnos1, setDatosAlumnos1] = useState([]);
  const [datosCalificacione1, setDatosCalificaciones1] = useState([]);

  useEffect(() => {
    getEscuela()
    getEstados()
    getTipoPersonal()
    getCargos()
    getPersonal()
    getGrados()
    getSeccion()
    getPadres()
    getMaterias()
    getAlumnos()
    getAlumnosA()
    getCalificaciones()
   
  }, []);

  //Función GET ESCUELA
  function getEscuela() {
    axios.get('http://localhost:3001/centro-educativo'
    ).then((resultados) => {
      setDatos(resultados.data);

    });
  }

  //Función GET ESTADOS
  function getEstados() {
    axios.get('http://localhost:3001/estados'
    ).then((resultados) => {
      setDatosEstados(resultados.data);

    });
  }

  //Función GET TIPO PERSONAL
  function getTipoPersonal() {
    axios.get('http://localhost:3001/tipo-personal'
    ).then((resultados) => {
      setDatosTipoPersonal(resultados.data);

    });
  }

  //Función GET CARGOS
  function getCargos() {
    axios.get('http://localhost:3001/cargo'
    ).then((resultados) => {
      setDatosCargo(resultados.data);

    });
  }

  //función GET PERSONAL
  function getPersonal() {
    axios.get('http://localhost:3001/personal/vista'
    ).then((resultados) => {
      setDatosPersonal(resultados.data);

    });
  }

  //Función GET GRADOS
  function getGrados() {
    axios.get('http://localhost:3001/grados'
    ).then((resultados) => {
      setDatosGrados(resultados.data);
    });
  }

  //Función GET ESCUELA
  function getSeccion() {
    axios.get('http://localhost:3001/secciones'
    ).then((resultados) => {
      setDatosSeccion(resultados.data);

    });
  }

  //Función GET PADRES DE FAMILIA
  function getPadres() {
    axios.get('http://localhost:3001/padres-familia'
    ).then((resultados) => {
      setDatosPadres(resultados.data);

    });
  }

  //Función GET MATERIAS
  function getMaterias() {
    axios.get('http://localhost:3001/materias'
    ).then((resultados) => {
      setDatosMaterias(resultados.data);
    });
  }

  //Función GET ESCUELA
  function getAlumnos() {
    axios.get('http://localhost:3001/alumnos/vista'
    ).then((resultados) => {
      setDatosAlumnos(resultados.data);

    });
  }

  //Función GET ESCUELA
  function getAlumnosA() {
    axios.get('http://localhost:3001/alumnos'
    ).then((resultados) => {
      setdatosAlumnosA(resultados.data);

    });
  }

  //Función GET CALIFICACIONES
  function getCalificaciones() {
    axios.get('http://localhost:3001/calificaciones/vista'
    ).then((resultados) => {
      setDatosCalificaciones(resultados.data);

    });
  }

//Función DELETE ESTADOS
function deleteEstados(id) {
  console.log("Eliminado",id)
  axios.delete(`http://localhost:3001/estados/${id}`
  ).then((resultados) => {
    setDatosEstados1(resultados.data);
    getEstados();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}


//Función DELETE ESCUELAS
function deleteEscuela(id) {
  //console.log("Eliminado",id)
  axios.delete(`http://localhost:3001/centro-educativo/${id}`
  ).then((resultados) => {
    setDatos1(resultados.data);
    getEscuela();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

 //Función DELETE TIPO PERSONAL
 function deleteTipoPersonal(id) {
  // console.log("Eliminado",id)
  axios.delete(`http://localhost:3001/tipo-personal/${id}`
  ).then((resultados) => {
    setDatosTipoPersonal1(resultados.data);
    getTipoPersonal()
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

 //Función DELETECARGOS
 function deleteCargos(id) {
  //console.log("Eliminado",id)
  axios.delete(`http://localhost:3001/cargo/${id}`
  ).then((resultados) => {
    setDatosCargo1(resultados.data);
    getCargos();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

 //función DELETE PERSONAL
 function deletePersonal(id) {
  axios.delete(`http://localhost:3001/personal/${id}`
  ).then((resultados) => {
    setDatosPersonal1(resultados.data);
    getPersonal()
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

 //Función DELETE GRADOS
 function deleteGrados(id) {
  axios.delete(`http://localhost:3001/grados/${id}`
  ).then((resultados) => {
    setDatosGrados1(resultados.data);
    getGrados();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

//Función DELETE SECCION
function deleteSeccion(id) {
  axios.delete(`http://localhost:3001/secciones/${id}`
  ).then((resultados) => {
    setDatosSeccion1(resultados.data);
    getSeccion();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}

//Función DELETE PADRES DE FAMILIA
function deletePadres(id) {
  axios.delete(`http://localhost:3001/padres-familia/${id}`
  ).then((resultados) => {
    setDatosPadres1(resultados.data);
    getPadres();
  }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
}
  //Función DELETE MATERIAS
  function deleteMaterias(id) {
    axios.delete(`http://localhost:3001/materias/${id}`
    ).then((resultados) => {
      setDatosMaterias1(resultados.data);
      getMaterias();
    }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
  }
//Función DELETE ALUMNOS
  function deleteAlumnos(id) {
    axios.delete(`http://localhost:3001/alumnos/${id}`
    ).then((resultados) => {
      setDatosAlumnos1(resultados.data);
      getAlumnos()
    }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
  }

   //Función DELETE CALIFICACIONES
   function deleteCalificaciones(id) {
    axios.delete(`http://localhost:3001/calificaciones/${id}`
    ).then((resultados) => {
      setDatosCalificaciones1(resultados.data);
      getCalificaciones();
    }).catch(err => alert(`No se puede eliminar este registro ${err.toString()}`))
  }

  return (
    <div className='container'>
       <div className='row'>
        <div className="col-12 col-sm-6">
          <span>Hola, {user.name} <img width={50} height={50} src={user.picture} alt="" /></span>
          {/* <div>Logged: {String(isAuthenticated)}</div>
          <div>Verified: {String(user.email_verified)}</div> */} <br/>
          <button className='btn btn-primary' onClick={() => logout()}>Cerrar Sesión</button>

        </div>

      </div>
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario C.E.</div>
            <div className="card-body" >
              <FormularioEscuela getEscuela={getEscuela} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Lista de Centros Educativos</h4>
          <TablaEscuela datosTabla={datos} eliminarEscuela={deleteEscuela} />
        </div>
      </div>
      {/* Segundo Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Estados</div>
            <div className="card-body" >
              <FormularioEstados getEstados={getEstados} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Estados</h4>
          <TablaEstados datosTabla={datosEstados} eliminarEstados={deleteEstados}/>
          
        </div>
      </div>
      {/* Tercera Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Tipo de Personal</div>
            <div className="card-body" >
              <FormularioTipoPersonal getTipoPersonal={getTipoPersonal} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Tipos de Personal</h4>
          <TablatipoPersonal datosTabla={datosTipoPersonal} eliminarTipoPersonal={deleteTipoPersonal} />
        </div>
      </div>
      {/* Cuarta Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Cargos</div>
            <div className="card-body" >
              <FormularioCargos getCargos={getCargos} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Cargos</h4>
          <TablaCargos datosTabla={datosCargo} eliminarCargo={deleteCargos}/>
        </div>
      </div>
      {/* Quinta Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Personal</div>
            <div className="card-body" >
              <FormularioPersonal getPersonal={getPersonal} datosTipoPersonal={datosTipoPersonal} datosEstados={datosEstados} datos={datos} datosCargo={datosCargo} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Personal</h4>
          <TablaPersonal datosTabla={datosPersonal} eliminarPersonal={deletePersonal}/>
        </div>
      </div>
      {/* SextaFila Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Grado</div>
            <div className="card-body" >
              <FormularioGrados getGrados={getGrados} datos={datos} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Grados</h4>
          <TablaGrados datosTabla={datosGrados} eliminarGrado={deleteGrados} />
        </div>
      </div>
      {/* SeptimaFila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Secciones</div>
            <div className="card-body" >
              <FormularioSeccion getSeccion={getSeccion} datosGrados={datosGrados} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Secciones</h4>
          <TablaSeccion datosTabla={datosSeccion} eliminarSeccion={deleteSeccion} />
        </div>
      </div>
      {/* OctavoFila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Padres de Familia</div>
            <div className="card-body" >
              <FormularioPadres getPadres={getPadres} datos={datos} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Padres de Familia</h4>
          <TablaPadres datosTabla={datosPadres} eliminarPadre={deletePadres} />
        </div>
      </div>
      {/* Novena Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Materias</div>
            <div className="card-body" >
              <FormularioMaterias getMaterias={getMaterias} datosEstados={datosEstados} datosGrados={datosGrados} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Materias</h4>
          <TablaMaterias datosTabla={datosMaterias} eliminarMateria={deleteMaterias} />
        </div>
      </div>
      {/* Décima Fila */}
      <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Alumnos</div>
            <div className="card-body" >
              <FormularioAlumnos getAlumnos={getAlumnos} datosEstados={datosEstados} datosPadres={datosPadres}
                datos={datos} datosSeccion={datosSeccion} />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Alumnos</h4>
          <TablaAlumnos datosTabla={datosAlumnos} eliminarAlumno={deleteAlumnos}/>
        </div>
      </div>
       {/* Onceava Fila */}
       <hr className='mt-5' />
      <div className="row" >
        <div className="col-12 col-sm-6 mt-5" >
          <div className="card">
            <div className="card-header text-center bg-success text-white">Formulario Calificaciones</div>
            <div className="card-body" >
              <FormularioCalificaciones getCalificaciones={getCalificaciones} datosAlumnosA={datosAlumnosA} datosMaterias={datosMaterias}/>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-5 ">
          <h4 className='text-center mb-3'>Calificaciones</h4>
          <TablaCalificaciones datosTabla={datosCalificaciones} eliminarCalificacion={deleteCalificaciones} />
        </div>
      </div>
    </div> //cierre del div container

  );

} //cierre de la function App
export default withAuthenticationRequired(App);









  //



