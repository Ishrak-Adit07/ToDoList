const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "adit@postgres",
    host : "localhost",
    port : 5432,
    database : "pdb"
});

module.exports = pool;