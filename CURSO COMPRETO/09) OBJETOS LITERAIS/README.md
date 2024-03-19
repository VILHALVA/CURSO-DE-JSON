# OBJETOS LITERAIS
## JAVASCRIPT:
Os objetos literais em JavaScript são uma maneira de criar objetos de forma concisa e direta, usando uma sintaxe de chave-valor. Os objetos literais são frequentemente usados para representar estruturas de dados e organizar informações. Aqui estão alguns conceitos-chave sobre objetos literais em JavaScript:

1. **Sintaxe de Objetos Literais:**
   - Um objeto literal é criado usando chaves `{}` e contém zero ou mais pares chave-valor separados por vírgulas.
   - Cada par chave-valor é composto por uma chave (também chamada de propriedade) e um valor. A chave é uma string e o valor pode ser qualquer expressão válida em JavaScript.

Exemplo de um objeto literal:

```javascript
const pessoa = {
  nome: "Gabriel",
  idade: 30,
  cidade: "São Paulo"
};
```

2. **Acessando Propriedades:**
   - Você pode acessar as propriedades de um objeto usando a notação de ponto ou a notação de colchetes.

Exemplo:

```javascript
console.log(pessoa.nome); // Usando notação de ponto
console.log(pessoa["idade"]); // Usando notação de colchetes
```

3. **Adicionando Propriedades:**
   - Você pode adicionar novas propriedades a um objeto existente simplesmente atribuindo um valor a uma chave que ainda não existe no objeto.

Exemplo:

```javascript
pessoa.profissao = "Engenheiro";
console.log(pessoa.profissao); // "Engenheiro"
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
delete pessoa.cidade;
console.log(pessoa.cidade); // undefined, pois a propriedade "cidade" foi excluída
```

6. **Propriedades Aninhadas:**
   - Um objeto literal pode conter propriedades aninhadas, que são objetos dentro de objetos.

Exemplo:

```javascript
const livro = {
  titulo: "Aventuras de Alice no País das Maravilhas",
  autor: {
    nome: "Lewis Carroll",
    nacionalidade: "britânica"
  }
};
console.log(livro.autor.nome); // "Lewis Carroll"
```

Os objetos literais são uma parte fundamental da linguagem JavaScript e são amplamente utilizados para representar dados estruturados e organizar informações de maneira organizada e acessível. Eles são muito versáteis e podem ser usados em várias situações para representar diferentes tipos de dados.

## JSON:
É importante notar que o formato JSON não suporta comentários. No JSON, apenas a estrutura de dados é permitida, e os comentários não são reconhecidos como parte do formato.

Em JSON, a representação de um objeto não inclui comentários, apenas os pares chave-valor e os valores associados a essas chaves. O JSON é estritamente uma notação de dados e é usado para transmitir informações entre sistemas, sem incluir qualquer tipo de anotações ou explicações no formato em si.

Para adicionar comentários a dados JSON, você precisaria incluí-los na documentação ou em uma descrição separada fora do JSON. Eles não são parte do conteúdo real.