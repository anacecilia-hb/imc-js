const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  
    let peso = req.query.peso;
    let altura = req.query.altura;
    console.log(req.query)

    let imc = peso/(altura*altura);
    console.log(imc);

    res.json({imc:imc});
});

app.listen(8080,()=>{
    let data = new Date();
    console.log("Servidor Iniciado em: "+data);
});