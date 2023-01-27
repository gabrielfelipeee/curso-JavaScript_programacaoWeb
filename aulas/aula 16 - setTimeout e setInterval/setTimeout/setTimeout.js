/*
Eventos de tempo:
    Os eventos de tempo permitem a execução do código em intervalos de tempo especificosç. Esses intervalos de tempo são chamados de CRONOMETRAGEM.
    
    Os dois métodos chaves para usar com JS são:

    setTimeout (function, tempo em milissegundos)
    -> Executa uma função, depois de esperar um número específico de milissegundos.

    setInterval (function, milissegundos)
    -> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/


// setTimeout -> executa uma vez após o tempo determinado
function ativarContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar";

    tempo = setTimeout(function() {
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
    }, 5000); // 5000 milissegundos -> 5 segundos
}

// Parar setTimeout
function pararContagem() {
    clearTimeout(tempo); // Comando para parar a contagem de setTimeout
    document.getElementById("tempo").innerHTML = "Parou a contagem";
}