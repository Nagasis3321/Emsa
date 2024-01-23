const manejoErrores = (err, req, res, next) => {
	switch (err.code) {
		case 'E_CONN_REFUSED':
			err.message = 'Error de conexión en la base de datos'
			break
		case 'E_BAD_INSERT':
			err.message = 'Error de inserción de datos en la base de datos'
			break
		default:
			err.message = 'Error interno del servidor'
	}
	res.status(500).json(err.message)
	console.error(err)
}

export default manejoErrores
