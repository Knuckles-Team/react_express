const PGPool = require("pg").Pool;

const pgpool = new PGPool({
    host: "postgres.arpa",
    user: "postgres",
    port: 5432,
    password: "example",
    database: "db"
});
module.exports = pgpool;
