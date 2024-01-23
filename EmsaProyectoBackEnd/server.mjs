import app from './app.js'

const port = process.env.SV_PORT || 3000
const host = process.env.SV_HOST || '0.0.0.0'

app.listen(port, host, () => {
	console.log(`Servidor escuchando en http://${host}:${port}`)
})
