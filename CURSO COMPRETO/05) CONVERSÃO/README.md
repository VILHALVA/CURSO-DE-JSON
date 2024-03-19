# CONVERSÃO
**Convertendo em JavaScript:**

- Em JavaScript, você pode converter entre diferentes tipos de dados usando funções e operadores apropriados. Por exemplo, você pode usar `parseInt()` para converter uma string em um número inteiro, ou `parseFloat()` para converter em um número de ponto flutuante. Além disso, você pode usar operadores de comparação para converter valores booleanos em outros tipos de dados.

**JS Diferente de JSON:**

- É importante notar que JavaScript (JS) e JSON são diferentes em termos de representação de dados. JavaScript é uma linguagem de programação que permite uma ampla variedade de tipos de dados, enquanto o JSON é um formato de intercâmbio de dados mais restrito e estruturado.

**JSON.stringify():**

- `JSON.stringify()` é um método em JavaScript que permite converter objetos JavaScript em uma representação JSON em formato de string. Isso é útil quando você deseja transmitir ou salvar dados em um formato que seja compatível com JSON.

Exemplo:

```javascript
var pessoa = { nome: "João", idade: 30 };
var jsonString = JSON.stringify(pessoa);
console.log(jsonString);
```

**JSON.parse():**

- `JSON.parse()` é um método em JavaScript que permite converter uma string JSON de volta em um objeto JavaScript. Isso é útil quando você recebe dados no formato JSON e deseja trabalhar com eles como objetos JavaScript.

Exemplo:

```javascript
var jsonString = '{"nome": "Lucas", "idade": 25}';
var pessoa = JSON.parse(jsonString);
console.log(pessoa.nome); // Saída: "Lucas"
```

**Comillas Dobles para JSON y Sencillas para JS:**

- Em JSON, as chaves e strings devem ser sempre envolvidas por aspas duplas, por exemplo: `"nome": "Maria"`. Em JavaScript, você pode usar tanto aspas duplas quanto simples para criar strings, por exemplo: `'Olá, Mundo!'`.

Essas conversões e diferenças são importantes ao lidar com dados em JavaScript e JSON, especialmente quando você precisa trocar informações entre sistemas ou formatar dados para diferentes fins.