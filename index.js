const express = require('express');
const app = express();
const usuario= require('./routes/usuario');
const producto = require('./routes/producto');
const compra = require('./routes/compra');
const cors = require('cors')
// Ajustes
app.set('port', process.env.PORT || 3001);

app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',usuario); //servicios de para estudiantes
app.use('/api',producto);  //servicios de para los modulos
app.use('/api',compra);  //servicios de para los modulos

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});