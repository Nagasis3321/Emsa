const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cargaRoutes = require('./routes/cargaRoutes');
const reclamoRoutes = require('./routes/reclamoRoutes');
const seguimientoRoutes = require('./routes/seguimientoRoutes.js');

const app = express();

app.use(helmet());

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour',
});
app.use(limiter);

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize());

app.use(xssClean());

app.use(hpp());

app.use(compression());

app.use('/carga', cargaRoutes);
app.use('/reclamo', reclamoRoutes);
app.use('/seguimiento', seguimientoRoutes);

module.exports = app;