# CONVERSÃO A FUNDO - PARSE
**JSON.parse():**

- O `JSON.parse()` é uma função em JavaScript que analisa uma string JSON e cria um objeto JavaScript a partir dos dados contidos na string.

- É frequentemente usado quando você recebe dados JSON de uma fonte externa, como um servidor ou uma API, e deseja trabalhar com esses dados em JavaScript.

- A função `JSON.parse()` aceita um argumento obrigatório, que é a string JSON que você deseja analisar. Veja um exemplo:

```javascript
const jsonString = '{"nome": "Vilhalva", "idade": 27}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nome); // Saída: "Vilhalva"
```

- Você também pode fornecer um segundo argumento opcional chamado "reviver". Este é uma função que é chamada para cada item do objeto resultante da análise. Você pode usá-lo para transformar ou modificar os valores durante o processo de análise.

Exemplo de uso do "reviver":

```javascript
const jsonString = '{"nome": "Vilhalva", "idade": 27}';
const objeto = JSON.parse(jsonString, (chave, valor) => {
  if (chave === "idade") {
    return valor + 10; // Incrementa a idade em 10
  }
  return valor;
});
console.log(objeto.idade); // Saída: 37
```

- Se a string JSON não for válida, o `JSON.parse()` lançará uma exceção. Portanto, é uma boa prática envolver o `JSON.parse()` em um bloco `try...catch` para lidar com possíveis erros de análise.

Exemplo de uso com tratamento de exceções:

```javascript
try {
  const jsonString = '{"nome": "Vilhalva", "idade": 27';
  const objeto = JSON.parse(jsonString);
  console.log(objeto.nome);
} catch (erro) {
  console.error("Erro na análise JSON: " + erro.message);
}
```

O `JSON.parse()` é uma ferramenta poderosa para analisar dados JSON em JavaScript, permitindo que você trabalhe com esses dados em objetos JavaScript em seu código. Certifique-se de tratar possíveis erros de análise ao usar esta função.