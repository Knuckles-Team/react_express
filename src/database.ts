
function Postgres() {
    const {Client} = require('pg');

    const client = new Client({
        host: "postgres.arpa",
        user: "postgres",
        port: 5432,
        password: "example",
        database: "db"
    })

    client.connect();

    client.query(`Select * from transactions`, (err?:any, res?:any) =>{
        if(!err){
            console.log(res.rows);
        } else{
            console.log(err.message);
        }
        client.end;
    })
}
export default Postgres;
