// Operadores matemáticos + - / *
var n, n2, soma;
n = 11;
n2 = 3;
soma = n + n2;
console.log(soma);





// Incremento ++
let v1, v2, total;
v1 = 10;
v2 = 15;
total = ++ v1;
console.log(total);  // Print: 11.
console.log(v1); // Obs com o incremento, o v1 também passa a valer 11, serve para o decremento também.

// Decremento --
total = -- v2;
console.log(total);





// Atribuição -= += *= /=
total += v1;  // Total = ele mesmo + v1 | Ex: -> total = total + v1;
console.log(total);





// Operadores de sequência, concatenação
let nome, sobrenome, nomeCompleto;
nome = "João"
sobrenome = "Silva"
nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)





// Comparação < <= > >= == === != !==         true ou false
let valor1, valor2, resultado;
valor1 = '5';
valor2 = 5;
resultado = valor1 != valor2;
console.log(resultado);

/* diferença de == e ===
== -> Verifica se o valor é igual. "5" == 5  -> true

=== -> Verifica se o valor e TIPO é igual. "5" === 5 -> false

Isso também vale para != e !== 
"5" != 5 -> false

"5" !== 5 -> true
*/





// Operador ternário
let idade, eleitor, resul;
idade = 18;
eleitor = idade >= 18 ? "Voto obrigatório!" : "Voto Opcional ou não pode votar!";
console.log(eleitor);





// Lógicos ! -> not        || -> ou               && -> e
resul = idade > 60 || idade < 70;
console.log(resul);


// ! usa-se fora da condição
resul = !(idade == 18)
console.log(resul)
