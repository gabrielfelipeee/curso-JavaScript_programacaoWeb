/*
Eventos de tempo:
    Os eventos de tempo permitem a execução do código em intervalos de tempo especificosç. Esses intervalos de tempo são chamados de CRONOMETRAGEM.
    
    Os dois métodos chaves para usar com JS são:

    setTimeout (function, tempo em milissegundos)
    -> Executa uma função, depois de esperar um número específico de milissegundos.

    setInterval (function, milissegundos)
    -> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/


// setInterval -> O setInterval continua chamando a função até que clearInterval() seja chamado ou a janela seja fechada.
function ativarContagem() {
    tempo = setInterval (function() {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000)
}

// Parar setInterval
function pararContagem() {
    clearInterval(tempo); // Comando para parar a contagem de setInterval
}