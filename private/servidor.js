const express = require('express'),
      nodemailer = require('nodemailer'),
      path = require('path'),
      bodyParse = require('body-parser'),
      cors = require('cors'),
      mysql = require('mysql');


const app = express();


/** Configuracion **/

app.use(express.static(path.join(__dirname,'../public')));

// Configuracion del puerto.
app.set('port', process.env.PORT || 3000);


/** middleware **/

// encode la url para recibir datos JSON
app.use(express.json());

// Limita el acceso que tienen las paginas al end-point
app.use(cors());

/** Conexion a la base de datos **/

 const connection = mysql.createConnection({
     cliente: 'mysql',
     host:'localhost',
     user:'root',
     password:'',
     database:'formulario'
 });
//  Verificar la conexion y que no haya errores
connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion Correcta.");
    }
});

connection.query("SELECT * FROM datos", (err, datos) =>{
    if (err) throw err;
});

// connection.end();


app.post('/formulario', (req, res) => {

    let Datos = {ID,Nombre, Telefono, Correo, Mensaje} = req.body;

    connection.query("INSERT INTO datos SET ?", Datos, (err,Datos) => {
        if (err) throw err;
        console.log(Datos);
        }).then(Datos =>{
            // res.status(200).send("insertado");
            res.redirect("/contacto.html");
        });
        console.log( req.body);
        // Envio de email
        let transporte = nodemailer.createTransport("SMTP",{
            service: 'gmail',
            auth:{
                user: 'karolyn.delrosario@gmail.com',
                pass: 'J@rabaco@'
            }
        });
    connection.end();
        
    let mailOption = {
        from: `${Correo}`,
        html: `<h1>Informacion de Contacto</h1>
        <h2>Nombre: ${Nombre}</h2><br>
        <h2>Correo: ${Correo}</h2><br>
        <h2>Telefono: ${Telefono}</h2><br>
        <h2>Mensaje: ${Mensaje}</h2><br>`
    };

    transporte.sendMail(mailOption,(error, info) =>{
        if(error){
            console.log(error);
            res.status(500).send(error);
        }else{
            console.log('Email sent: ' + `Enviado desde ${Correo}` + info.res);
            res.status(200).send('Sent exitosamente');
        }
    });
});


app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
