import React from "react";

export function TablaCalificaciones(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaC key={i} Nombres={filas.Nombres} Apellidos={filas.Apellidos} Grado={filas.Grado} idCalificaciones={filas.idCalificaciones}
                            Seccion={filas.Seccion} Materia={filas.Materia} Nota={filas.Nota} eliminarCalificacion={props.eliminarCalificacion}/>
	);
	
	//console.log(props.datosTabla)

	return (

		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Nombre</th>
						<th className="text-center">Apellidos</th>
                        <th className="text-center">Grado</th>
                        <th className="text-center">Seccion</th>
                        <th className="text-center">Materia</th>
                        <th className="text-center">Nota</th>
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



function FilaTablaC({Nombres, Apellidos, Grado, Seccion, Materia, Nota, idCalificaciones, eliminarCalificacion}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{Nombres}</td>
			<td className="text-center">{Apellidos}</td>
            <td className="text-center">{Grado}</td>
			<td className="text-center">{Seccion}</td>
            <td className="text-center">{Materia}</td>
			<td className="text-center">{Nota}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarCalificacion(idCalificaciones)} className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}