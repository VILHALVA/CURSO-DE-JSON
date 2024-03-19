// Definindo um objeto literal representando um carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    preco: 75000,
    proprietario: {
      nome: "João",
      idade: 35,
      cidade: "São Paulo"
    },
    ligar: function() {
      console.log("O carro está ligado.");
    },
    desligar: function() {
      console.log("O carro está desligado.");
    },
    getInfo: function() {
      return `${this.marca} ${this.modelo}, ano ${this.ano}, cor ${this.cor}.`;
    }
  };
  
  // Acessando propriedades do objeto
  console.log(carro.marca); // Saída: Toyota
  console.log(carro["preco"]); // Saída: 75000
  
  // Chamando métodos do objeto
  carro.ligar(); // Saída: O carro está ligado.
  console.log(carro.getInfo()); // Saída: Toyota Corolla, ano 2022, cor Prata.
  