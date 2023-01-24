/*
Variáveis:
var   -> Variável pode ser redeclarada.
let   -> Variável não pode ser redeclarada.
const -> Valor de const não pode mudar.
*/
// var
var name = 'Gabriel';
var name = 'Felipe'; // Foi redeclarada para Felipe
console.log(name);


// Declarações de variáveis
var a, b, c;     // Dessa forma fica mais organizado

// Atribuições
a = 5;
b = 10;   
c = a + b;
console.log(c);

/*/
var nome, sobrenome, nomeCompleto;
nome = 'João'
sobrenome = 'Silva'
nomeCompleto = nome + ' ' + sobrenome
document.getElementById('nome').innerHTML = nomeCompleto


*/

// let
let num = 10;
// let num = 15; // Não pode ser redeclarada, mas posso colocar um novo valor, ex: num = 15


// Uma variável let declarada dentro de um bloco, só pode ser acessada dentro dele. Diferente de var.
let numero = 10;
{
    let numero = 155;
}
console.log(numero); // 10



// const 
const myName = 'Gabriel'; // MyName sempre vai ser Gabriel
console.log(myName);
