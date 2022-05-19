import React from "react";

export function TablatipoPersonal(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaTP key={i} idTipoPersonal={filas.idTipoPersonal} tipo={filas.tipo} eliminarTipoPersonal={props.eliminarTipoPersonal}/>
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id</th>
						<th className="text-center">Tipos de Personal</th>
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



function FilaTablaTP({idTipoPersonal, tipo, eliminarTipoPersonal}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idTipoPersonal}</td>
			<td className="text-center">{tipo}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarTipoPersonal(idTipoPersonal)} className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}
