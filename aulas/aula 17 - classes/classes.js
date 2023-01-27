/*
As classes são como "fábricas" para criar objetos.
Pose se dizer que são "funções especiais" para a criação de objetos.

Assim como uma fábrica na via real precisa das máquinas para contruir os objetos, as classes no js usam um método chamado constructor() para fabricar objetos.

*/

class Carros {
    constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: biiiiiiiiiiiiii"
    }
}

const camaro = new Carros("Chevrolet", "Camaro", 2014);
console.log(camaro);
console.log(camaro.buzina());


const jetta = new Carros("Volkswagen", "Jetta", 2014);
console.log(jetta);


const sonata = new Carros("Hyundai", "Sonata", 2011);
console.log(sonata);