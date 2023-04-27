const  Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    password : "shuvo125",
    port : 5432,
});

module.exports = pool;