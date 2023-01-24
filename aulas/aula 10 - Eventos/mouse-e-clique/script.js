// onclick -> Dispara quando recebe um click.
function clicar() {
    alert("onclick -> Dispara quando recebe um click.");
}



// ondlbclick -> Dispara quando recebe click duplo.
function cliqueDuplo() {
    alert("ondlbclick -> Dispara quando recebe click duplo.");
}


// Eventos de mouse

// onmouseover -> Dispara quando o mouse está sobre o elemento. 
function viraAzul() {
    let div = document.getElementById("eventosMouse");
    div.style.backgroundColor = 'blue';
    div.innerHTML = "Evento onmouseover -> Dispara quando o mouse está sobre o elemento."
}


// onmouseout -> Dispara quando o mouse está fora do elemento
function viraVerde() {
    let div = document.getElementById("eventosMouse");
    div.style.backgroundColor = 'green';
    div.innerHTML = "Evento onmouseout -> Dispara quando o mouse está fora do elemento.";
}

/*
// onmousemove -> Dispara quando o mouse é movido no elemento.
function adicionaTexto() {
    let p = document.getElementById("texto"); 
    p.append("O mouse moveu");
}
// append -> adiciona, ou seja, ele adicionou o texto no parágrafo.
*/

/*
// onmousedown -> Dispara quando o botão do mouse foi pressionado.
function cliqueNaTela() {
    alert("onmousedown -> Dispara quando o botão do mouse foi pressionado.");
}
*/




//onmouseup -> Dispara quando clica e solta o botão do mouse.
function cliqueSolte() {
    alert("onmouseup -> Dispara quando clica e solta o botão do mouse.");
}