const sql = require('mssql');
require('app');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
    },
};

const pool = new sql.ConnectionPool(config);

module.exports = {
    connect: async () => await pool.connect(),
    close: () => pool.close(),
};
