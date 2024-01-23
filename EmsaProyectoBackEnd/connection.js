import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	server: process.env.DB_SERVER,
	port: Number(process.env.DB_PORT),
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // Para Azure
		trustServerCertificate: true, // Cambiar a true para local dev / self-signed certs
	},
}

const pool = new sql.ConnectionPool(config)

export async function connect() {
	//console.log(config)
	try {
		await pool.connect()
		console.log('Conexión exitosa a SQL Server')
		return pool
	} catch (err) {
		err.code = 'E_CONN_REFUSED'
		throw err
	}
}

export function close() {
	return pool.close()
}
