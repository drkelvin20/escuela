import React from "react";

export function TablaAlumnos(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaA key={i} nombresAlumno={filas.nombresAlumno} apellidosAlumno={filas.apellidosAlumno} 
                            dni={filas.dni} estado={filas.estado} nombresPadre={filas.nombresPadre}
                            apellidosPadre={filas.apellidosPadre} escuela={filas.escuela} grado={filas.grado} seccion={filas.seccion}
							idAlumno={filas.idAlumno} eliminarAlumno={props.eliminarAlumno}
                              />
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Nombre del Alumno</th>
                        <th className="text-center">Apellidos del Alumno</th>
                        <th className="text-center">Identidad</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center">Nombre del Padre</th>
                        <th className="text-center">Apellidos del Padre</th>
                        <th className="text-center">Escuela</th>
                        <th className="text-center">Grado</th>
                        <th className="text-center">Sección</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{filasTabla}
				</tbody>
			</table>

		</div>

	);
}



function FilaTablaA({nombresAlumno, apellidosAlumno, dni, estado, eliminarAlumno,
                     nombresPadre, apellidosPadre, escuela, grado, seccion, idAlumno}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{nombresAlumno}</td>
			<td className="text-center">{apellidosAlumno}</td>
            <td className="text-center">{dni}</td>
			<td className="text-center">{estado}</td>
            <td className="text-center">{nombresPadre}</td>
			<td className="text-center">{apellidosPadre}</td>
            <td className="text-center">{escuela}</td>
            <td className="text-center">{grado}</td>
            <td className="text-center">{seccion}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarAlumno(idAlumno)} className="btn btn-danger">Eliminar</button></td>
		</tr>
                                                              
	);

}