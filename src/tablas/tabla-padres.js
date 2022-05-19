import React from "react";

export function TablaPadres(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaP key={i} idPadreFamilia={filas.idPadreFamilia} nombres={filas.nombres} apellidos={filas.apellidos} dni={filas.dni} eliminarPadre={props.eliminarPadre}/>
	);
	
	//console.log(props.datosTabla)

	return (
		<div className="table-responsive">
			<table className="table  table-hover table-sm table-bordered">
				<thead className="table-success">
					<tr >
						<th className="text-center">Nombre</th>
						<th className="text-center">Apellidos</th>
                        <th className="text-center">Identidad</th>
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



function FilaTablaP({idPadreFamilia, nombres, apellidos, dni, eliminarPadre}) {
	//console.log()
	return (
		<tr>
			<td className="text-center">{nombres}</td>
			<td className="text-center">{apellidos}</td>
            <td className="text-center">{dni}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarPadre(idPadreFamilia)} className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}