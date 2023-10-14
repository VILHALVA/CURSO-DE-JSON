# OPERAÇÕES CRUD - PROPRIEDADES
## JAVASCRIPT:
As operações CRUD, que significam Criar (Create), Ler (Read), Atualizar (Update) e Deletar (Delete), são um conjunto de operações comuns usadas para gerenciar dados em um sistema ou aplicativo. Vamos considerar como essas operações podem ser aplicadas a propriedades de objetos em JavaScript:

1. **Criar (Create)**:
   - Para criar uma nova propriedade em um objeto, você simplesmente atribui um valor a uma nova chave (propriedade).

   Exemplo de criação de uma propriedade:

   ```javascript
   const pessoa = {};
   pessoa.nome = "Maria"; // Criando a propriedade "nome"
   ```

2. **Ler (Read)**:
   - Para ler o valor de uma propriedade existente de um objeto, você pode acessá-la usando a notação de ponto ou a notação de colchetes.

   Exemplo de leitura de uma propriedade:

   ```javascript
   const nome = pessoa.nome; // Usando notação de ponto
   const idade = pessoa['idade']; // Usando notação de colchetes
   ```

3. **Atualizar (Update)**:
   - Para atualizar o valor de uma propriedade existente, você simplesmente atribui um novo valor à mesma chave.

   Exemplo de atualização de uma propriedade:

   ```javascript
   pessoa.idade = 31; // Atualizando o valor da propriedade "idade"
   ```

4. **Deletar (Delete)**:
   - Para excluir uma propriedade de um objeto, você pode usar o operador `delete`.

   Exemplo de exclusão de uma propriedade:

   ```javascript
   delete pessoa.cidade; // Excluindo a propriedade "cidade"
   ```

Estas operações CRUD são comuns quando se lida com propriedades de objetos em JavaScript. Elas permitem criar, ler, atualizar e excluir informações associadas a essas propriedades, fornecendo uma maneira eficaz de gerenciar dados em seus programas.

## JSON:
Em JSON (JavaScript Object Notation), o conceito de operações CRUD (Create, Read, Update, Delete) não se aplica diretamente, pois o JSON é um formato de dados para representar informações de maneira estruturada e não uma linguagem de programação com funcionalidades para realizar essas operações. No entanto, você pode realizar ações que correspondem aos princípios CRUD em um contexto onde o JSON é usado, como em sistemas de gerenciamento de dados.

Aqui estão algumas considerações sobre como essas operações podem se relacionar com objetos JSON:

1. **Criar (Create)**:
   - Para criar um novo objeto JSON, você simplesmente declara um novo objeto com pares chave-valor. Aqui está um exemplo:

   ```json
   {
     "nome": "Maria",
     "idade": 30,
     "cidade": "São Paulo"
   }
   ```

2. **Ler (Read)**:
   - A leitura de dados em formato JSON envolve acessar os valores associados às chaves (propriedades) do objeto JSON. Isso pode ser feito em um programa que analisa o JSON, como uma aplicação web que recebe dados de um servidor.

   Exemplo de leitura de um valor no JSON:

   ```json
   const nome = objetoJSON.nome;
   const idade = objetoJSON.idade;
   ```

3. **Atualizar (Update)**:
   - Para atualizar um objeto JSON, você deve substituir o objeto existente por um novo objeto JSON com as informações atualizadas. É uma substituição completa, não uma atualização parcial de uma propriedade.

   Exemplo de atualização de um objeto JSON:

   ```json
   // Objeto JSON original
   {
     "nome": "Maria",
     "idade": 30,
     "cidade": "São Paulo"
   }

   // Atualização completa do objeto JSON
   {
     "nome": "Maria",
     "idade": 31,
     "cidade": "São Paulo"
   }
   ```

4. **Deletar (Delete)**:
   - Para excluir informações em um objeto JSON, você deve criar um novo objeto JSON sem a chave que deseja excluir. Da mesma forma que a atualização, isso envolve substituir o objeto original por um novo objeto.

   Exemplo de exclusão de uma chave no JSON:

   ```json
   // Objeto JSON original
   {
     "nome": "Maria",
     "idade": 30,
     "cidade": "São Paulo"
   }

   // Exclusão da chave "cidade"
   {
     "nome": "Maria",
     "idade": 30
   }
   ```

Embora o JSON seja um formato de dados que não inclui operações CRUD intrínsecas, você pode criar, ler, atualizar e excluir informações representadas em JSON como parte de sua lógica de aplicativo ou processos de manipulação de dados.