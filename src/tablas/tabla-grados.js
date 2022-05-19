import React from "react";

export function TablaGrados(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaG key={i} idGrado={filas.idGrado} grado={filas.grado} eliminarGrado={props.eliminarGrado}/>
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id</th>
						<th className="text-center">Grados</th>
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



function FilaTablaG({idGrado, grado, eliminarGrado}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idGrado}</td>
			<td className="text-center">{grado}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarGrado(idGrado)} className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}