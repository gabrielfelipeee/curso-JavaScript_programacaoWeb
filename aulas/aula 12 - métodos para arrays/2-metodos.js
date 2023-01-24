const lista = ["arroz", "feijão", "leite", "café"];
console.log(lista);



// join() -> Troca o separador entre on itens
console.log(lista.join(", ")); // Vírgula e espaço entre os itens




// pop() -> Remove o último item de uma array
lista.pop();
console.log(lista);



// shift() -> Remove o primeiro item de uma array.
lista.shift();
console.log(lista);



// unshift ->  Adiciona um ou mais elementos no início de um array
lista.unshift("tomate");
console.log(lista);









const meses = ['Jan', 'Mar', 'Abr', 'Jun'];
console.log(meses);



// splice -> Adiciona novos elementos enquanto remove elementos antigos.

 //1 -> posição do elemento a ser adicionado, 0 -> a serem removidos. (nesse caso)
meses.splice(1, 0, "fev");
console.log(meses); // 'Jan', 'fev', 'Mar', 'Abr', 'Jun'


meses.splice(4, 1, "mai");
console.log(meses);





// concat() -> Junta duas ou mais arrays
const lista1 = ["arroz", "feijão", "leite", "café"];
const lista2 = ["farinha", "pimenta", "manga", "tomate"];
const superLista = lista1.concat(lista2);
console.log(superLista);