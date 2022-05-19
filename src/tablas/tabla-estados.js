import React from 'react';




export function TablaEstados(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaE key={i} idEstado={filas.idEstado} estado={filas.estado} eliminarEstados={props.eliminarEstados} />
	);
	
	//console.log(props.eliminarEstados)

	return (

		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id Estados</th>
						<th className="text-center">Estados</th>
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



function FilaTablaE({idEstado, estado, eliminarEstados}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idEstado}</td>
			<td className="text-center">{estado}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarEstados(idEstado) } className="btn btn-danger">Eliminar</button></td>
		</tr>
	);
}



