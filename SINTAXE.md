# SINTAXE
Aqui está um exemplo de JSON:

```json
{
  "nome": "João",
  "idade": 30,
  "casado": false,
  "filhos": ["Ana", "Pedro"]
}
```

Neste exemplo, temos um objeto JSON que contém informações sobre uma pessoa. "nome", "idade", "casado" e "filhos" são chaves, e seus respectivos valores são "João", 30, "false" e uma matriz de strings.

Aqui está um exemplo de como você pode criar e analisar JSON em JavaScript, que é uma linguagem comum para trabalhar com JSON em aplicativos web:

```javascript
// Criando um objeto JSON
var pessoa = {
  nome: "João",
  idade: 30,
  casado: false,
  filhos: ["Ana", "Pedro"]
};

// Convertendo o objeto JSON em uma string JSON
var jsonString = JSON.stringify(pessoa);

// Analisando uma string JSON de volta para um objeto JavaScript
var pessoaDeNovo = JSON.parse(jsonString);

console.log(pessoaDeNovo.nome); // Saída: "João"
```

**Explicação do Código:**
- Primeiro, criamos um objeto JSON chamado "pessoa" com as informações da pessoa.
- Em seguida, usamos `JSON.stringify()` para converter o objeto JSON em uma string JSON.
- Depois, usamos `JSON.parse()` para analisar a string JSON de volta em um objeto JavaScript.
- Finalmente, podemos acessar as propriedades do objeto JavaScript resultante, como `pessoaDeNovo.nome`.