
//criando on=bjeto literal
const pessoa = {
   nome : 'Thiago',
   idade : "30",
   profissao: "Desenvolvedor Front-end",
   salario: "3.000"
}

//criando objeto pelo construtor
const pessoa1 = new Object();
pessoa1.nome =  "Bianca";
pessoa1.idade = 31;
pessoa1.profissao = "desempregada";

  
//metodos
pessoa1.falarNome = function(){
   const dataAtual = new Date();
   return dataAtual.getFullYear() - this.idade;
}

//fazer for dentro de objetos
for(chave in pessoa1){
    console.log(chave + " => " + pessoa1[chave]) //mostrar chavve e valor das chaves
}

//deletando chave do objeto
//delete pessoa1.nome;

console.log(pessoa1.falarNome());


//Factory function (1) e Construtor functions (2)

//Factory function (1)
// mais semelhante ao react
function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        //pode usar o get ou não
        get nomecompleto(){
          return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criarPessoa('thiago', 'henrique');
console.log(p1.nomecompleto);


//Construtor functions (2)
//melhor ela já retorna o objeto 
function Casal(homem, mulher){
  this.homem = homem;
  this.mulher = mulher;
}

const n1 = new Casal('thiago','adriana');
//aqui pode mudar o valor da memoria diferente de mudar uma constante ex: p1 = "beatriz";
n1.mulher = 'beatriz';
//assim não pode
//n1 = "Ana";

//dessa forma eu bloqueio o objeto
Object.freeze(n1); 

n1.mulher = "Aline"; // não vai aletrar

const n2 = new Casal('marcelo','bianca');

console.log(n1);
console.log(n2);