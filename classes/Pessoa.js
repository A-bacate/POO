 class Pessoa {
    //atributos
    nome;
    idade;

    // métodos
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    seApresentar(){
        return `Olá, eu sou a(o) ${this.nome} e tenho ${this.idade} anos.`
    }
 }
 module.exports = Pessoa