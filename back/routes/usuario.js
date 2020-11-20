const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/usuario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-usuario',(req,res)=>{

const { documento, nombre, apellido, email, direccion, contraseña, nombre_usuario, vendedor, telefono_celular} = req.body;
let usuario = [documento, nombre, apellido, email, direccion, contraseña, nombre_usuario, vendedor, telefono_celular];

let nuevoUsuario = `INSERT INTO usuario(documento, nombre, apellido, email, direccion, contraseña, nombre_usuario, vendedor, telefono_celular)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Usuario matriculado`, })
  });
});  

router.put('/usuario:id', (req, res) => {
  const {documento, nombre, apellido, email, direccion, contraseña, nombre_usuario, vendedor, telefono_celular} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE usuario SET documento=?, nombre = ?,apellido = ?,
  email = ?,direccion = ?,telefono_celular = ?,contraseña = ?,
  vendedor= ?, nombre_usuario=?, WHERE id = ?`, 
  [documento, nombre, apellido, email, direccion, contraseña, nombre_usuario, vendedor, telefono_celular,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuario WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'usurio eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;