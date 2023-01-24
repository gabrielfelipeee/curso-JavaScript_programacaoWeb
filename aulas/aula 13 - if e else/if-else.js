// if -> se | else -> se não

let interruptor = "off";

if (interruptor == "on") {
    console.log("A lâmpada está desligada");
} else {
    console.log("A lâmpada está desligada");
}




// else if
var hora = new Date().getHours(); // Hora atual do computador

if (hora < 12) {
    console.log("Bom-dia!");
} else if (hora < 18) {
    console.log("Boa-tarde");
} else {
    console.log("Boa-noite");
}

//Usando if e else 
function verificar() {
    let nome = document.getElementById("nome").value;  // value -> caracteres
    if (nome == "" || nome == null) { // Se o valor de nome estiver vazio OU nulo
        alert("O elemento não pode está vazio!")
    } else {
        alert(`Olá, ${nome}!`)
    }
}