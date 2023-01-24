const jogadores = ["Cristiano Ronaldo", "Messi", "Neymar", "Mbappé"];



// slice() ->  Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim. (fim não é incluído).
const bolaOuro = jogadores.slice(0, 2);
console.log(bolaOuro);



// .sort() -> Coloca os elementos em ordem alfabéticas
const ordemAlfabetica = jogadores.sort();
console.log(ordemAlfabetica);



// reverse -> Ao contrário, Z à A
const ordemContrario = jogadores.reverse();
console.log(ordemContrario);



// Números em ordem
const numeros = [5, 6, 78, 25, 10];



const numOrdemAlfa = numeros.sort();
console.log(numOrdemAlfa);    // Só para endenter a função abaixo



numeros.sort(function(a, b) {
    return a - b  // Decrescente seria b - a 
})
console.log(numeros);



// Pegar o maior número
function maiorNumero(array) {
    return Math.max.apply(null, array);
}
console.log(maiorNumero(numeros));



// Pegar o menor número
function menorNumero(array) {
    return Math.min.apply(null, array);
}
console.log(menorNumero(numeros));


console.log(numeros)

// filter() -> Filtragem, ex: Pegar só os números acima de 8
const maior8 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 8;
}
console.log(maior8);