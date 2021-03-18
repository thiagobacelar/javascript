
var resultado;

// funções normais
function nome(){
    console.log('thiago');
}
nome();

//funções com argumentos

function somarNumeros(){
    let soma =0;
    console.log(arguments);
    //arguments => em caso de não ser passado parametro
    for(let argumento of arguments){
        soma += argumento;
    }
    console.log("soma é:" + soma);
}
somarNumeros(1,5,10,7,23,50);



//funções imediatas
(function(nomecompleto){
   console.log(nomecompleto);
})('thiago henrique');




//funções de callback
numeroAlatorio(10,20, imrimir =>{
  resultado = imrimir;
  console.log(`o numero sorteado é: ${resultado}`);
})
function numeroAlatorio(max,min, callback){
    let aleatorio = Math.random() * (max - min) + min;
    callback(Math.floor(aleatorio));
    return aleatorio;
}


