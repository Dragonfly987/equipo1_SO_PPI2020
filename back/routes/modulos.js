const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/modulos',(req,res)=>{
  mysqlConnection.query('SELECT modulo, modulos.mod FROM `modulos`',(err,rows,fields)=>{
    if(!err){
      res.json(rows);
      console.log(fields);
    }
    else{
      console.log(err); 
    }
  });
}) ;


router.post('/nuevo-modulo/',(req,res)=>{
  const {modulo,mod}=req.body;
  //const abreviatura = req.body.mod
  mysqlConnection.query(`INSERT INTO modulos (modulo, modulos.mod) VALUES ('${modulo}', '${mod}')`,(err,rows,fields)=>{
    if(!err){
      res.json({status: "Módulo agregado"});
    }
    else{
      console.log(err); 
    }
  });
});

router.put('/modulo/:id',(req,res)=>{
  const {id}=req.params;
  const {modulo,mod}=req.body;
  mysqlConnection.query(`UPDATE modulos SET modulo='${modulo}', modulos.mod='${mod}' WHERE modulos.id=${id};`,(err,rows,fields)=>{
    if(!err){
      res.json({status: "Módulo actualizado"});
    }
    else{
      console.log(err); 
    }
  });
});


router.delete('/modulo/:id',(req,res)=>{
  const {id}=req.params;
  //const id = req.params.idmod
  mysqlConnection.query(`DELETE FROM modulos WHERE modulos.id = ${id}`,(err,rows,fields)=>{
    if(!err){
      res.json({status: "Módulo eliminado"});
    }
    else{
      console.log(err); 
    }
  });
});


module.exports =router