const Pool = require("pg").Pool;

const pool = new Pool({
    host: "postgres.arpa",
    user: "postgres",
    port: 5432,
    password: "example",
    database: "db"
});
module.exports = pool;
