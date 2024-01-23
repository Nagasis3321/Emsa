import pkg from 'mssql'
const { VarChar, Date } = pkg
import { connect, close } from '../connection.js'
import catchAsync from '../utils/catchAsync.js'

export const insertEquipoInDB = async (equipoData) => {
	// Abrir conexión con la BD
	const pool = await connect().catch((err) => {
		throw err
	})

	const query = `
    INSERT INTO dbo.Equipos (nombreEquipo, fechaIngreso)
    VALUES (@nombreEquipo, @fechaIngreso)
  `

	const params = [
		{
			name: 'nombreEquipo',
			type: VarChar(50),
			value: equipoData.nombreEquipo,
		},
		{
			name: 'fechaIngreso',
			type: Date,
			value: equipoData.fechaIngreso,
		},
	]

	try {
		const result = await pool.request()

		params.forEach((param) => {
			result.input(param.name, param.type, param.value)
		})

		const queryResult = await result.query(query)

		return queryResult
	} catch (err) {
		err.code = 'E_BAD_INSERT'
		throw err
	} finally {
		// Cerrar la conexión con la BD
		await close()
	}
}
