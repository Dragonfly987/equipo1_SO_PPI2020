const express = require('express');
const app = express();
const estudiantes = require('./routes/estudiantes');
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios');

// Ajustes
app.set('port',3001);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',estudiantes); //servicios de para estudiantes
app.use('/api',modulos);  //servicios de para los modulos
app.use('/api',colegios);  //servicios de para los modulos

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});