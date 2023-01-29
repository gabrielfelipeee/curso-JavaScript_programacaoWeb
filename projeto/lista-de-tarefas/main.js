let contador = 0;
let inputText = document.getElementById("tarefa");
let botaoAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista")



function addTarefa() {
    let valorInput = inputText.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++ contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="itemIcone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="itemNome">
            ${valorInput}
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" id="deletar"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    inputText.value = "";
    inputText.focus(); 
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe=="item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 -> ENTER
        event.preventDefault(); // Cancelar qualquer outra função do enter 
        botaoAdd.click();
    }
})