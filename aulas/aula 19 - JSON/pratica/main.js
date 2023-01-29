


function buscarCEP() {
    let input = document.getElementById("CEP").value;

    const ajax = new XMLHttpRequest(); // Acessar um site
ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
ajax.send();

ajax.onload = function() {
    let obj = JSON.parse(this.responseText); // Texto em objeto
    let bairro = obj.bairro;
    let cidade = obj.localidade;  // somente as propriedades que eu quero
    let estado = obj.uf;

    document.getElementById("texto").innerHTML = `Bairro: ${bairro} <br> Cidade: ${cidade} <br> Estado: ${estado}`
}
}

