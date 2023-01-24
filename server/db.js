const PGPool = require("pg").Pool;

const pgpool = new PGPool({
    host: "192.168.1.60",
    user: "postgres",
    port: 5432,
    password: "example",
    database: "db"
});
module.exports = pgpool;
