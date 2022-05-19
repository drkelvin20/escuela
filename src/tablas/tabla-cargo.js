import React from "react";

export function TablaCargos(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaC key={i} idCargo={filas.idCargo} cargo={filas.cargo} eliminarCargo={props.eliminarCargo} />
	);

	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Id</th>
						<th className="text-center">Cargos</th>
						<th className="text-center">Acciones</th>

					</tr>
				</thead>
				<tbody>
					{filasTabla}
				</tbody>
			</table>

		</div>

	);
}



function FilaTablaC({ idCargo, cargo, eliminarCargo }) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{idCargo}</td>
			<td className="text-center">{cargo}</td>
			<td className="text-center"> <button type="button" className="btn btn-success "> <i className="fa-solid fa-pen-to-square"></i></button>
				<button type="button" onClick={() => eliminarCargo(idCargo)} className="btn btn-danger "><i className="fa-solid fa-trash-can "></i></button></td>

		</tr>

	);

}
