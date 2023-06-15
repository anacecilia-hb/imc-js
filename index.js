//CAMADA REST
const express = require('express');
const app = express();
const calculadoraimc = require('./calculadoraimc');

app.get('/',(req,res)=>{
    
    if(calculadoraimc.validaParametro(req.query.peso) && calculadoraimc.validaParametro(req.query.altura)){

   
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calculadoraimc.efetuarCalculoIMC(peso, altura);
    let status = calculadoraimc.retornarStatusIMC(imc);

    res.json({imc: imc, status: status});

    }else{
        res.status(400).json({'Erro' : 'Peso ou Altura inválidos'});
    }
});

app.listen(8080,()=>{
    let data = new Date();
    console.log("Servidor Iniciado em: "+data);
});