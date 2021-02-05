const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const cors = require('cors');
// const { con } = require('./conexion.js');


const Servidor = express();

/** Cnfiguraciones **/
// Hacer publicas las rutas.
Servidor.use(express.static(path.join(__dirname, "/Assets")));
// Configurar puerto.
Servidor.set('port', process.env.PORT || 3000);

/*** MIDDLEWARE ***/
// encode la url para recibir datos JSON.
Servidor.use(bodyParse.json());

//Limitar las paginas que tinene accesos al end-point
Servidor.use(cors());

// end-point.
Servidor.post('/formulario', (req, res) => {
    let Datos = { id, Nombre, Telefono, Correo, Mensaje } = req.body;
    con.query("INSERT INTO datos SET ?", Datos, (err, Datos) => {
        if (err) throw err;
        console.log(Datos);
    }).then(Datos => {
        res.status(200).send("insertado");
        // res.redirect("/contacto.html");
    });
    console.log(req.body);
    con.end();
})

Servidor.listen(Servidor.get('port'), () => {
    console.log(`Servidor en http//localhost:${Servidor.get('port')}`);
});