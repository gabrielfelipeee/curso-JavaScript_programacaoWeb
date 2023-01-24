// onkeydown -> Disparado quando uma tecla é pressionada.
function teclaPressionada() {
    let inputTexto = document.getElementById("texto1");
    inputTexto.style.backgroundColor = 'grey';
}



// onkeyup -> Só é disparado quando uma tecla é pressionada e solta.
function teclaSolta() {
    let inputTexto = document.getElementById("texto2");
    inputTexto.style.backgroundColor = 'lightblue';
}