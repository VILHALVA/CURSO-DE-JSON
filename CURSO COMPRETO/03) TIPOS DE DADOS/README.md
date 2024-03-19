# TIPOS DE DADOS
**Tipos de Dados em JSON:**

JSON suporta vários tipos de dados. Os tipos de dados básicos em JSON são:

- **String:** Sequência de caracteres entre aspas duplas, como "Olá, Mundo!".
- **Número:** Pode ser um número inteiro ou de ponto flutuante, como 42 ou 3.141.
- **Booleano:** Pode ser verdadeiro (true) ou falso (false).
- **Nulo:** Representado pela palavra-chave "null".
- **Objeto:** Uma coleção não ordenada de pares chave-valor.
- **Array:** Uma coleção ordenada de valores.

**Arreglos em JSON:**

Um array em JSON é uma coleção ordenada de valores, onde cada valor pode ser de qualquer tipo de dados válido em JSON. Os valores são separados por vírgulas e o array é delimitado por colchetes. Aqui está um exemplo de um array JSON:

```json
{
  "cores": ["vermelho", "verde", "azul"]
}
```

**Objetos em JSON:**

Um objeto em JSON é uma coleção não ordenada de pares chave-valor, onde as chaves são strings e os valores podem ser de qualquer tipo de dados válido em JSON. Os pares chave-valor são separados por vírgulas e o objeto é delimitado por chaves. Aqui está um exemplo de um objeto JSON:

```json
{
  "pessoa": {
    "nome": "Maria",
    "idade": 25
  }
}
```

**Exercício:**

Você pode criar exercícios para praticar a criação e manipulação de JSON. Por exemplo, você pode criar um exercício que peça aos alunos para criar um objeto JSON representando informações pessoais, como nome, idade, endereço, etc. Em seguida, você pode pedir-lhes para adicionar ou modificar valores no objeto.

**Fechas em JSON:**

JSON não possui um tipo de dados nativo para datas. Geralmente, as datas são representadas como strings no formato ISO 8601. Por exemplo:

```json
{
  "dataNascimento": "2023-10-13T14:30:00Z"
}
```

Neste exemplo, a data de nascimento é representada como uma string com o formato "AAAA-MM-DDTHH:mm:ssZ", onde "T" separa a data e a hora, e "Z" indica o fuso horário (UTC).

Estas são algumas informações básicas sobre tipos de dados, arrays, objetos, exercícios e representação de datas em JSON. 