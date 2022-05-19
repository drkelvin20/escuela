import React from "react";

export function TablaSeccion(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaS key={i} idSeccion={filas.idSeccion} seccion={filas.seccion} eliminarSeccion={props.eliminarSeccion}/>
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id</th>
						<th className="text-center">Seccion</th>
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



function FilaTablaS({idSeccion, seccion, eliminarSeccion}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idSeccion}</td>
			<td className="text-center">{seccion}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarSeccion(idSeccion)} className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}