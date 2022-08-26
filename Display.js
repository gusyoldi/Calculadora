const Calculadora = require("./calculadora");

class Display {
    constructor(displayValorActual, displayValorAnterior) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.displayValorActual = '';
        this.displayValorAnterior = '';
    }

    agregarNumero(numero) {
        this.displayValorActual = numero;
    }

}

