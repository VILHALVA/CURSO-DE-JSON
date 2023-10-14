// Uma string JSON que será analisada
const jsonString = '{"nome": "Maria", "idade": 30}';

try {
  // Usando JSON.parse para analisar a string JSON em um objeto JavaScript
  const objeto = JSON.parse(jsonString);

  // Exibindo valores do objeto resultante
  console.log("Nome: " + objeto.nome);
  console.log("Idade: " + objeto.idade);

  // Usando JSON.parse com uma função reviver para transformar valores durante a análise
  const jsonStringComIdadeIncrementada = '{"nome": "João", "idade": 35}';
  const objetoComIdadeIncrementada = JSON.parse(jsonStringComIdadeIncrementada, (chave, valor) => {
    if (chave === "idade") {
      return valor + 5; // Incrementa a idade em 5
    }
    return valor;
  });

  console.log("Nome: " + objetoComIdadeIncrementada.nome);
  console.log("Idade Incrementada: " + objetoComIdadeIncrementada.idade);
} catch (erro) {
  // Tratando possíveis erros de análise
  console.error("Erro na análise JSON: " + erro.message);
}
