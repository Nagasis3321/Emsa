import pkg from 'mssql'
const { VarChar, Numeric } = pkg
import { connect, close } from '../connection.js'
import catchAsync from '../utils/catchAsync.js'
import { insertEquipoInDB } from './equipoController.js'

export const createComputadora = catchAsync(async (req, res) => {
	// Paso 1: Crear el Equipo
	const equipoResult = await insertEquipoInDB(req.body.computadora)
	console.log('equipoResult:', equipoResult)

	// Paso 2: Crear la Computadora
	const computadoraResult = await insertComputadoraInDB(req.body.computadora)
	console.log('computadoraResult:', computadoraResult)

	// Añadir cantidad total de filas afectadas
	computadoraResult.rowsAffected =
		parseInt(computadoraResult.rowsAffected) +
		parseInt(equipoResult.rowsAffected)

	// Retornar la respuesta final
	res.status(201).json(computadoraResult)
})

async function insertComputadoraInDB(computadoraData) {
	// Abrir la conexión con la BD
	const pool = await connect().catch((err) => {
		throw err
	})

	const query = `
    INSERT INTO dbo.Computadoras (nombreEquipo, teamViewer)
    VALUES (@nombreEquipo, @teamViewer)
  `

	const params = [
		{
			name: 'nombreEquipo',
			type: VarChar(50),
			value: computadoraData.nombreEquipo,
		},
		{
			name: 'teamViewer',
			type: Numeric,
			value: computadoraData.teamViewer,
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
