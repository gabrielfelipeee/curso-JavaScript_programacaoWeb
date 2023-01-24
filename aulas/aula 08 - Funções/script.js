/*
Uma função é um bloco de código projetado para executar uma tarefa específica.

Uma função javaScript é executada quando "algo" a chama.


Obs: Uma variável criada dentro de um bloco de código, só pode ser acessada  dentro dele mesmo.
*/
function soma(v1, v2) {
    return v1 + v2;
};
console.log(soma(5, 3));





function realParaDolar(real, cotacaoDolar) {
    return real / cotacaoDolar;
}
var valorEmReal = 10;
var valorDoDolar = 5.10;

var totalDolar = realParaDolar(valorEmReal, valorDoDolar); // Chamada da função
console.log(`R$ ${valorEmReal} equivale à US$ ${totalDolar}.`);






function fahrenheitParaCelsius (fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}
console.log(fahrenheitParaCelsius(68));




