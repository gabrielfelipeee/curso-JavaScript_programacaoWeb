// onfocus -> Disparado quando o elemento recebe o foco. Válido para input.
function apagarTexto() {
    let campo1 = document.getElementById("campo1");
    campo1.style.backgroundColor = '#add8e6';
    campo1.value = "";
}
// o texto (value) vai ser limpo quando o input receber um foco.





// onblur -> Disparado quando o elemento perde o foco
function mudarCor() {
    let campo2 = document.getElementById("campo2")
    campo2.style.backgroundColor = 'grey';
    campo2.value = "O elemento perdeu o foco!";
}




// onchange -> Disparado quando ocorre uma mudança no conteúdo. (Ao mudar).
function mudarConteudo() {
    alert("O conteúdo do input mudou!");
}