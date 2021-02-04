const mysql = require('mysql');

// Conexion a la base de datos.

const con = mysql.createConnection({
    client: "mysql",
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "formulario"
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