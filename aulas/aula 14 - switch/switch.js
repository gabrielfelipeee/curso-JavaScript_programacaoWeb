function verificarCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); // texto digitado vai ficar minúsculo, mesmo que foi digitado maiúsculo.

    switch (cor) {
        case "azul violeta":
            document.body.style.backgroundColor = 'blueviolet';
            break;
        case "vermelho":
            document.body.style.backgroundColor = 'red';
            break;
        case "cinza":
            document.body.style.backgroundColor = 'grey';
            break;  
        default:
            document.getElementById("text").innerHTML = `Nenhuma cor disponível para: ${cor}!`
            break;
    }
}
// switch funciona com o comparativo === (valor e tipo). Ex: 0 === "0" -> false




function diaSemana() {
    let dia = new Date(). getDay();

    switch (dia) {
        case 0:
            alert("Hoje é Domingo!");
            break;
        case 1:
            alert("Hoje é Segunda!");
            break;
        case 2:
            alert("Hoje é Terça!");
            break;
        case 3:
            alert("Hoje é Quarta!");
            break;
        case 4:
            alert("Hoje é Quinta!");
            break;
        case 5:
            alert("Hoje é Sexta!");
            break;
        default:
            alert("Hoje é Sábado!");
    }
}