import React from "react";

export function TablaPersonal(props) {
	const filasTabla = props.datosTabla.map((filas, i) =>
		<FilaTablaP key={i} nombres={filas.nombres} apellidos={filas.apellidos} 
                            dni={filas.dni} correo={filas.correo} tipo_Personal={filas.Tipo_Personal}
                            estado={filas.Estado} cargo={filas.Cargo} idPersonal={filas.idPersonal} eliminarPersonal={props.eliminarPersonal}/>
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
                        <th className="text-center">Correo</th>
                        <th className="text-center">TipoPersonal</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center">Cargo</th>
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



function FilaTablaP({nombres, apellidos, dni, correo, tipo_Personal, estado, cargo, idPersonal, eliminarPersonal}) {
	//console.log(estado)
	return (
		<tr>
			<td className="text-center">{nombres}</td>
			<td className="text-center">{apellidos}</td>
            <td className="text-center">{dni}</td>
			<td className="text-center">{correo}</td>
            <td className="text-center">{tipo_Personal}</td>
			<td className="text-center">{estado}</td>
            <td className="text-center">{cargo}</td>
			<td className="text-center"><button type="button" className="btn btn-success">Editar</button></td>
			<td className="text-center"><button type="button" onClick={()=>eliminarPersonal(idPersonal)}  className="btn btn-danger">Eliminar</button></td>
		</tr>

	);

}