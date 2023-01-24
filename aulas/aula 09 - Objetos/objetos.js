/*
Objetos são basicamente variáveis com muitos valores dentros.

Ex: var carro = {marca:"ford", modelo:"fusion", ano:2014};

Os valores dentro de um objeto são chamados de propriedades. Nesse caso, marca, modelo e ano são as propriedades.

Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma função.

É interessante usar const em objetos.
*/
const carro = {marca: "ford", modelo: "fusion", ano: 2014, placa: "XXX-0000", 
buzina: function() {    // Método, função dentro de um objeto.
    return "Biiiiiiiii"
},
completo: function() { // Outro método
    return `A marca é ${this.marca} e o modelo é ${this.modelo}.`; 
}};
console.log(carro.buzina());  // Primeiro método

console.log(carro.completo()) // Segundo método

console.log(carro.modelo); // Uma das propriedades

// this -> este objeto, ou seja, carro.




const pessoa = {nome: "Maria", idade: 25, nacionalidade: "brasileira",
sobrePessoa: function() {
    return `${this.nome} é ${this.nacionalidade} e tem ${this.idade} anos de idade.`
}};
console.log(pessoa.sobrePessoa())