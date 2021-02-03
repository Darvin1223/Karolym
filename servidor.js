const express = require("express");
const path = require("path");


const Servidor = express();

/** Cnfiguraciones **/
Servidor.use(express.static(path.join(__dirname, "/Assets")));

Servidor.set('port', process.env.PORT || 3000);


Servidor.listen(Servidor.get('port'), () => {
    console.log(`Servidor en http//localhost:${Servidor.get('port')}`);
});