const PGPool = require("pg").Pool;

const pgpool = new PGPool({
    host: "0.0.0.0",
    user: "postgres",
    port: 5432,
    password: "example",
    database: "db"
});
module.exports = pgpool;
