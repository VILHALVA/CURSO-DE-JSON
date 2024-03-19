// Criando um objeto com informações sobre uma pessoa
const pessoa = {
    nome: "Marcos",
    idade: 30,
    cidade: "São Paulo"
  };
  
  // Usando JSON.stringify com o parâmetro replacer
  const jsonString = JSON.stringify(pessoa, (chave, valor) => {
    if (chave === "idade") {
      return undefined; // Remove a chave "idade" do resultado JSON
    }
    return valor; // Mantém o valor padrão para outras chaves
  });
  
  // Exibindo a string JSON resultante
  console.log("JSON com idade removida:", jsonString);
  
  // Usando JSON.stringify com a opção de formatação
  const jsonStringFormatado = JSON.stringify(pessoa, null, 2); // 2 espaços de indentação
  
  // Exibindo o JSON formatado
  console.log("JSON formatado:\n", jsonStringFormatado);
  
  // Criando um objeto com um método toJSON personalizado
  const pessoaComToJSON = {
    nome: "Sara",
    idade: 30,
    cidade: "São Paulo",
    toJSON: function () {
      return {
        nome: this.nome,
        cidade: this.cidade
      };
    }
  };
  
  // Usando JSON.stringify no objeto com método toJSON
  const jsonStringComToJSON = JSON.stringify(pessoaComToJSON);
  
  // Exibindo o JSON resultante com método toJSON personalizado
  console.log("JSON com método toJSON personalizado:\n", jsonStringComToJSON);
  