# PROPRIEDADES
## JAVASCRIPT:
Em JavaScript, as "propriedades" referem-se aos valores associados a um objeto. Os objetos em JavaScript são estruturas de dados que contêm pares chave-valor, onde a "chave" é o nome da propriedade e o "valor" é o conteúdo associado a essa propriedade. Aqui estão algumas informações importantes sobre propriedades em JavaScript:

1. **Sintaxe de Propriedade:**
   - As propriedades são definidas dentro de objetos e seguem a sintaxe chave-valor.
   - A chave é uma string (ou símbolo) que atua como um identificador exclusivo para a propriedade.
   - O valor pode ser qualquer tipo de dado válido em JavaScript, incluindo números, strings, objetos, funções, etc.

2. **Acessando Propriedades:**
   - Para acessar o valor de uma propriedade de um objeto, você pode usar a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto["propriedade"]`).

Exemplo:

```javascript
const pessoa = {
  nome: "Sara",
  idade: 18
};

console.log(pessoa.nome); // Usando notação de ponto
console.log(pessoa["idade"]); // Usando notação de colchetes
```

3. **Adicionando Propriedades:**
   - Você pode adicionar novas propriedades a um objeto simplesmente atribuindo um valor a uma chave que ainda não existe no objeto.

Exemplo:

```javascript
pessoa.cidade = "São Paulo";
console.log(pessoa.cidade); // "São Paulo"
```

4. **Modificando Propriedades:**
   - Você pode modificar o valor de uma propriedade existente atribuindo um novo valor à mesma chave.

Exemplo:

```javascript
pessoa.idade = 31;
console.log(pessoa.idade); // 31
```

5. **Deletando Propriedades:**
   - Você pode excluir uma propriedade de um objeto usando o operador `delete`.

Exemplo:

```javascript
delete pessoa.idade;
console.log(pessoa.idade); // undefined, pois a propriedade "idade" foi excluída
```

6. **Iteração sobre Propriedades:**
   - Você pode percorrer todas as propriedades de um objeto usando loops, como `for...in` ou métodos como `Object.keys()`, `Object.values()` e `Object.entries()`.

Exemplo usando `for...in`:

```javascript
for (const chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```

Propriedades são uma parte fundamental da programação em JavaScript, pois permitem a criação de objetos complexos com dados e comportamentos associados. Você pode acessar, adicionar, modificar e excluir propriedades para manipular objetos de acordo com suas necessidades.

## JSON:
Em JSON (JavaScript Object Notation), as propriedades referem-se às chaves e valores associados em objetos JSON. JSON é uma notação de serialização de dados e, como tal, é usado para representar dados estruturados. Aqui estão algumas informações importantes sobre propriedades em JSON:

1. **Sintaxe de Propriedade em JSON:**
   - As propriedades em JSON são representadas como pares chave-valor.
   - A chave é uma string entre aspas duplas que atua como um identificador exclusivo para a propriedade.
   - O valor pode ser qualquer tipo de dado JSON válido, como números, strings, objetos, arrays, booleanos, nulos, etc.

Exemplo de objeto JSON com propriedades:

```json
{
  "nome": "Jessica",
  "idade": 20
}
```

2. **Acessando Propriedades em JSON:**
   - Para acessar o valor de uma propriedade em JSON, você deve usar a notação de ponto ou a notação de colchetes, assim como em JavaScript.

Exemplo:

```json
{
  "nome": "Jessica",
  "idade": 20
}
```

3. **Adicionando ou Modificando Propriedades em JSON:**
   - Em JSON, você define todas as propriedades de um objeto de uma vez. Portanto, para adicionar ou modificar uma propriedade, você precisa criar um novo objeto JSON com os valores atualizados.

Exemplo de modificação em JSON:

```json
{
  "nome": "Jessica",
  "idade": 21,
  "cidade": "São Paulo"
}
```

4. **Deletando Propriedades em JSON:**
   - Em JSON, uma vez que você define um objeto, você não pode simplesmente excluir uma propriedade. Você precisa criar um novo objeto sem a propriedade que deseja excluir.

Exemplo de criação de novo objeto JSON sem uma propriedade:

```json
{
  "nome": "Jessica",
  "cidade": "São Paulo"
}
```

5. **Iteração sobre Propriedades em JSON:**
   - JSON é principalmente um formato de dados e não oferece suporte direto para loops ou iteração como o JavaScript. Portanto, para manipular JSON, você normalmente converte o JSON em um objeto JavaScript e, em seguida, itera sobre suas propriedades como faria em JavaScript.

JSON é usado para transmitir dados estruturados e não fornece a capacidade de manipular objetos JSON da mesma maneira que você pode manipular objetos JavaScript diretamente. Portanto, as operações de adição, modificação e exclusão de propriedades em JSON geralmente ocorrem durante a criação ou manipulação dos dados antes de serem convertidos em JSON ou após a análise do JSON para obter objetos JavaScript.