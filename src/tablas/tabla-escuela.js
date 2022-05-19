import React from "react";

export function TablaEscuela(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTabla key={i} codigoCE={filas.codigoCE} nombre={filas.nombre} eliminarEscuela={props.eliminarEscuela} />
	);
	
	//console.log(props.datosTabla)

	return (

		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Código del C.E.</th>
						<th className="text-center">Nombre del C.E.</th>
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



function FilaTabla({nombre, codigoCE, eliminarEscuela}) {
	// console.log(nombre)
	return (
		<tr>
			<td className="text-center">{nombre}</td>
			<td className="text-center">{codigoCE}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarEscuela(codigoCE) } className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}




