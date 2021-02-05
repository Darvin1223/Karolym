const mysql = require('mysql');

// Conexion a la base de datos.

const con = mysql.createConnection({
    client: "mysql",
    host: "bogjh6pbc5kl55jqnj7w-mysql.services.clever-cloud.com",
    user: "ug6zszbetlialvbi",
    password: "78v7TeTAVYNTkZRROQE5",
    port: 3306,
    database: "bogjh6pbc5kl55jqnj7w"
});

// Verifica que la conexion no tenga errores.
con.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexion Correcta!");
    }
});


module.exports = { con };