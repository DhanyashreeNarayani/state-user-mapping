const pgp = require('pg-promise')();
// const db = pgp({
//     host: 'localhost',
//     port: 5432, // Default PostgreSQL port
//     database: 'geodata',
//     user: 'postgres',
//     password: 'password'
// });
const db = pgp('postgres://postgres:password@postgress-app:5432/geodata');
module.exports = db;
