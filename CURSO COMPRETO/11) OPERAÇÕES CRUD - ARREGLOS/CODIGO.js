// Inicialize um array vazio para armazenar objetos de pessoas.
const pessoas = [];

// Função para criar (Create) um novo objeto de pessoa.
function criarPessoa(nome, idade) {
  const novaPessoa = { nome, idade };
  pessoas.push(novaPessoa);
  console.log(`Pessoa ${nome} criada.`);
}

// Função para ler (Read) todas as pessoas.
function listarPessoas() {
  console.log("Lista de pessoas:");
  pessoas.forEach((pessoa, indice) => {
    console.log(`Pessoa ${indice + 1}: Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  });
}

// Função para atualizar (Update) a idade de uma pessoa.
function atualizarIdade(nome, novaIdade) {
  const pessoa = pessoas.find((p) => p.nome === nome);
  if (pessoa) {
    pessoa.idade = novaIdade;
    console.log(`Idade de ${nome} atualizada para ${novaIdade}.`);
  } else {
    console.log(`Pessoa ${nome} não encontrada.`);
  }
}

// Função para excluir (Delete) uma pessoa.
function excluirPessoa(nome) {
  const indice = pessoas.findIndex((p) => p.nome === nome);
  if (indice !== -1) {
    const pessoaExcluida = pessoas.splice(indice, 1);
    console.log(`Pessoa ${nome} excluída.`);
  } else {
    console.log(`Pessoa ${nome} não encontrada.`);
  }
}

// Criar algumas pessoas de exemplo.
criarPessoa("Carlos", 30);
criarPessoa("João", 35);
criarPessoa("Ana", 28);

// Listar todas as pessoas.
listarPessoas();

// Atualizar a idade de "Maria".
atualizarIdade("Carlos", 31);

// Excluir a pessoa "João".
excluirPessoa("João");

// Listar todas as pessoas novamente.
listarPessoas();

// Converter o array de objetos em JSON.
const jsonPessoas = JSON.stringify(pessoas);

// Exibir o JSON resultante.
console.log("JSON resultante:");
console.log(jsonPessoas);
