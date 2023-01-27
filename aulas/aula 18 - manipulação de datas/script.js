
// Comando base
let data = new Date(); // Mostra o dia, hora, ano ...
console.log(data);



let ano = data.getFullYear(); // Pega o ano atual com 4 dígitos
console.log(ano);



let mesAtual = data.getMonth(); // Pega o mês atual: 0 até 11 | 0 -> janeiro --- 11 -> dezembro
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let meses = mesesDoAno[mesAtual];
console.log(meses); // Mês escrito



let diaMes = data.getDate(); // Pega o dia do mês atual -> 1 a 31
console.log(diaMes);



let diaSemana = data.getDay();  // Pega o dia da semana atual: 0 até 6
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let dia = diasDaSemana[diaSemana];
console.log(dia);



let hora = data.getHours();
console.log(hora);

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let milissegundos = data.getMilliseconds();
console.log(milissegundos);



// Data e hora no padrão BR -> DIA / MÊS / ANO  |  14:00
let dataHoraBr = data.toLocaleString('pt-br');
console.log(dataHoraBr);

// Somente data no padrão BR -> DIA / MÊS / ANO
let dataBr = data.toLocaleString('pt-br', {dateStyle: "short"});
console.log(dataBr);

// Somente hora no padrão BR -> 14:00
let horaBr = data.toLocaleString('pt-br', {timeStyle: "short"});
console.log(horaBr);



// Compara datas -> maior ou menor. Ex: vencimentos
let hoje = new Date();

let vencimento = new Date(2023, 0, 30);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!")
} else {
    console.log("Ainda não venceu!")
}



// Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2023, 6, 22);

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");