
var resultado;

// funções normais
function nome(nome){
    console.log(nome);
}
nome('thiago');




//funções imediatas
(function(nomecompleto){
   
    if(nomecompleto == '' || nomecompleto == null){
        alert('informe um nome !');
    }else{
        console.log(nomecompleto);
    }

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


