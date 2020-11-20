const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/producto', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM producto ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-producto',(req,res)=>{

const { imagen, nombre, descuento, descripcion, precio} = req.body;
let producto = [imagen, nombre, descuento, descripcion, precio];

let nuevoproducto = `INSERT INTO producto(imagen, nombre, descuento, descripcion, precio)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoproducto, producto, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`producto matriculado`, })
  });
});  

router.put('/producto:id', (req, res) => {
  const {imagen, nombre, descuento, descripcion, precio} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE producto SET imagen=?, nombre = ?,descuento = ?,
  descripcion = ?,precio = ?,WHERE id = ?`, 
  [imagen, nombre, descuento, descripcion, precio,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'producto actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/producto/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM producto WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Producto eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

