const mysql = require('mysql');

// Conexion a la base de datos.

const con = mysql.createConnection({
    client: "mysql",
    host: "b9lcuhhigb8q0pfai7y2-mysql.services.clever-cloud.com",
    user: "ug6zszbetlialvbi",
    password: "78v7TeTAVYNTkZRROQE5",
    port: 3306,
    database: "b9lcuhhigb8q0pfai7y2"
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
