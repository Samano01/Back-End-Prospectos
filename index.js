
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//base de datos
dbConnection();

// Directorio Publico
app.use( express.static('public') );

//lECTURA Y PARSEO DEL BODY
app.use(express.json());


//Rutas
app.use('/api/register', require('./routes/register'));



//Escuchar las peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${4000} `);
})
