/*
JavaScript Object Notation (JSON):
JSON é uma forma de converter um objeto em um texto, ou vice-versa.

Os 2 métodos de JSON no JS:

JSON.parse() -> Converte texto no padrão JSON em objetos.
JSON.stringfy() -> Converte objetos em texto padrão JSON.
*/

const pessoa = {
    nome: "Maria",
    idade: 25,
    nacionalidade: ["Brasil", "Portugal"],    // array dentro de objeto
    estado: "São Paulo"
}
document.getElementById("teste1").innerHTML = pessoa;  // print -> [object Object]


//Usando JSON

// Objeto em texto
let jsonParaTexto = JSON.stringify(pessoa);
document.getElementById("stringfy").innerHTML = jsonParaTexto;
// print -> {"nome":"Maria","idade":25,"nacionalidade":"Brasil","estado":"São Paulo"}


// Texto em objeto, para ser possível pegar uma propriedade
let obj = JSON.parse(jsonParaTexto);
document.getElementById("parse").innerHTML = obj.nome;
// print -> Maria


document.getElementById("portugal").innerHTML = obj.nacionalidade[1];






// Na prática

const ajax = new XMLHttpRequest(); // Acessar um site
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function() {
    document.getElementById("json").innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.cep);
}

