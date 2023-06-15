//CAMADA DE SERVIÇO (ARQUIVOS RELACIONADOS AO MAIN)
function efetuarCalculoIMC(peso,altura){
    let imc =  peso / (altura*altura);
    return imc;
}


function retornarStatusIMC(imc){
    let status;
    if(imc < 18.5){
        status = 'Abaixo do peso.';
    }
    else if(imc >= 18.5){
        status = 'Peso normal.';
    }
    else if(imc >= 24.9){
        status = 'Acima do peso.';
    }
    else{
        status = 'Obeso.';
    }
    return status;
}


function validaParametro(parametro){
    if(isNaN(parametro)){
        return false;
    }else{
        return true;
    }
}
exports.retornarStatusIMC = retornarStatusIMC;
exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.validaParametro = validaParametro;