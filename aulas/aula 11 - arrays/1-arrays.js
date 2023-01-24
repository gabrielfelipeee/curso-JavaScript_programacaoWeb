/*
arrays;
São usadas para armazenr vários valores dentro de um variável, o item dentro dele é encontrado pela posição do elemento.

*/
// Formas de fazer uma array

const lista = ["arroz", "feijão", "leite", "café"];
// mais indicada, por questão de praticidade


const lista2 = [];
lista2[0] = "arroz";
lista2[1] = "feijão";
lista2[2] = "leite";
lista2[3] = "café";


const lista3 = new Array("arroz", "feijão", "leite", "café");
console.log(lista3);





// Alterando valor de uma array
const times = ["vasco", "fluminense", "flamengo", "santos"];
times[0] = "palmeiras";
console.log(times);





// Ver quantidade de itens dentro de uma matriz
console.log(times.length);


// Ver o último item da matriz. (Serve para usar em matrizes grandes).
console.log(times[times.length - 1]);
// O tamanho da matriz menos 1, pois os elementos de uma array começa no 0, e o length no 1.



// Verificar se uma variável é uma array
console.log(Array.isArray(times)); // true