# CONVERSÕES A FUNDO
**JSON.stringify com o parâmetro `replacer`:**

O `JSON.stringify` é uma função em JavaScript que converte objetos em uma string JSON. Ele aceita um segundo parâmetro chamado `replacer`, que é uma função que permite a você personalizar a serialização dos valores do objeto.

O `replacer` é uma função que é chamada para cada item do objeto que está sendo serializado. Você pode usar o `replacer` para filtrar e transformar os valores antes de serem convertidos em JSON.

Exemplo de uso do `replacer`:

```javascript
const pessoa = {
  nome: "Ana",
  idade: 30,
  cidade: "São Paulo"
};

const jsonString = JSON.stringify(pessoa, (chave, valor) => {
  if (chave === "idade") {
    return undefined; // Remove a chave "idade" do resultado JSON
  }
  return valor; // Mantém o valor padrão para outras chaves
});

console.log(jsonString);
```

Neste exemplo, a função `replacer` remove a chave "idade" do objeto ao converter em JSON.

**JSON.stringify com a opção de formatação (`format`):**

A opção de formatação, também conhecida como "pretty-printing", é um recurso do `JSON.stringify` que permite adicionar espaços e quebras de linha para formatar o JSON de uma maneira mais legível por humanos. Isso é útil ao depurar ou ao gerar JSON para exibição.

Exemplo de uso da opção de formatação:

```javascript
const pessoa = {
  nome: "Marcos",
  idade: 30,
  cidade: "São Paulo"
};

const jsonString = JSON.stringify(pessoa, null, 2); // O valor 2 indica o número de espaços para indentação

console.log(jsonString);
```

O resultado será uma representação JSON com formatação legível:

```json
{
  "nome": "Gabriel",
  "idade": 25,
  "cidade": "São Paulo"
}
```

**Método `toJSON`:**

O método `toJSON` permite que você defina como um objeto deve ser serializado para JSON. Se um objeto tem um método `toJSON`, esse método será chamado pelo `JSON.stringify` para obter uma representação personalizada do objeto.

Exemplo do método `toJSON`:

```javascript
const pessoa = {
  nome: "Jaquetinha",
  idade: 40,
  cidade: "Rio de Janeiro",
  toJSON: function () {
    return {
      nome: this.nome,
      cidade: this.cidade
    };
  }
};

const jsonString = JSON.stringify(pessoa);

console.log(jsonString);
```

Neste exemplo, o método `toJSON` personaliza a saída JSON incluindo apenas as chaves "nome" e "cidade" do objeto original.

Esses recursos do `JSON.stringify` e o uso do método `toJSON` são úteis para personalizar a conversão de objetos em JSON de acordo com suas necessidades.