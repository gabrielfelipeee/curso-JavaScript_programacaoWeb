/*
Laços de repetição:
    É uma forma fácil e rápido de executar uma ação repetidas vezes.

    Sintaxe:

    for (inicialização; condição; expressão final) {
   declaração
    }
*/

for (let i = 0; i <= 10; i ++) { // 0 até 10
    console.log(i)
}





let ano = new Date().getFullYear(); // ano atual
for (let i = ano; i >= 2000; i --) { // ano atual até 2000 -> DECRESCENTE
    document.getElementById("ano").innerHTML += "<option value = '" + i + "'>" + i + "</option>";
}
// += pega todos os elementos -> ano atual até 2000 | = somente o último -> 2000


const carros = ["gol", "camaro", "onix", "fusca"];
let tamnahoArray = carros.length;

for (let i = 0; i < tamnahoArray; i ++) {
    document.getElementById("carros").innerHTML += carros[i] + ", "
}