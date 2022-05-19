import React from "react";

export function TablaMaterias(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaM key={i} idMateria={filas.idMateria} nombre={filas.nombre}/>
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id</th>
						<th className="text-center">Materia</th>
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



function FilaTablaM({idMateria, nombre}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idMateria}</td>
			<td className="text-center">{nombre}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}