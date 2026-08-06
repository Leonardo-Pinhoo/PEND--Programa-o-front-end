// Classe
class Carro{

    //Construtor
    constructor(marca, modelo, ano, cor){
    
    //atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    }

    ligar() {
        console.log("O carro ligou!");
    }

    acelerar() {
        console.log("O carro acelerou!");
    }
   
    frear(){
        console.log(`${this.modelo} freiou`);
    }


}

const carro1 = new Carro("Toyota", "Corolla", 2025, "Preto");

const carro2 = new Carro("Honda", "Fit", 2025, "Vermelho");

const carro3 = new Carro("Fiat", "Uno", 2025, "Branco");

const carro4 = new Carro("Hyundai", "HB20", 2025, "Cinza");

console.log("Carro 1: ", carro1);
console.log("Carro 2: ", carro2);
console.log("Carro 3: ", carro3);
console.log("Carro 4: ", carro4);

console.log("-----------------------------");
console.log("Atributos do carro 1:")
console.log("-", carro1.marca)
console.log("-", carro1.modelo)
console.log("-", carro1.ano)
console.log("-", carro1.cor)
console.log("-----------------------------")
console.log("Atributos do carro 2:")
console.log("-", carro2.marca)
console.log("-", carro2.modelo)
console.log("-", carro2.ano)
console.log("-", carro2.cor)
console.log("-----------------------------")
console.log("Atributos do carro 3:")
console.log("-", carro3.marca)
console.log("-", carro3.modelo)
console.log("-", carro3.ano)
console.log("-", carro3.cor)
console.log("-----------------------------")
console.log("Atributos do carro 4:")
console.log("-", carro4.marca)
console.log("-", carro4.modelo)
console.log("-", carro4.ano)
console.log("-", carro4.cor)

carro1.ligar()
carro1.acelerar()
carro1.frear()

carro2.ligar()
carro2.acelerar()
carro2.frear()

carro3.ligar()
carro3.acelerar()
carro3.frear()

carro4.ligar()
carro4.acelerar()
carro4.frear()