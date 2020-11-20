const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/compra', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM compra ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-compra',(req,res)=>{

const {  fecha, valor_compra, nombre_produc} = req.body;
let compra = [ fecha, valor_compra, nombre_produc];

let nuevocompra = `INSERT INTO compra( fecha, valor_compra, nombre_produc)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevocompra, compra, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`compra matriculado`, })
  });
});  

router.put('/compra:id', (req, res) => {
  const { fecha, valor_compra, nombre_produc} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE compra SET fecha=?, valor_compra = ?,nombre_produc = ?,
  descripcion = ?,precio = ?,WHERE id = ?`, 
  [ fecha, valor_compra, nombre_produc, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'compra actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/compra/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM compra WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'compra eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
