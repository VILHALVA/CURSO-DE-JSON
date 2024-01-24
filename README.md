# CURSO DE JSON
👨‍⚖️JSON (JAVASCRIPT OBJECT NOTATION) É UM FORMATO DE DADOS LEVE E LEGÍVEL POR HUMANOS, USADO PARA TROCAR INFORMAÇÕES ESTRUTURADAS ENTRE UM SERVIDOR E UM CLIENTE. É AMPLAMENTE UTILIZADO NA COMUNICAÇÃO DE DADOS EM APLICATIVOS WEB E MÓVEIS.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/VEJA-DOCUMENTAÇÃO-03A9F4?logo=google)](https://www.ibm.com/docs/en/db2/11.5?topic=concepts-json-documents) 
[![GitHub Repo stars](https://img.shields.io/badge/-PLAYLIST%20DO%20YOUTUBE-blueviolet)](https://youtube.com/playlist?list=PLrDTf5qnZdEAiHO19QB9hq5QXAef1h8oY&si=nmPBarCCxQ1cWmTt)

## CONCEITO:
JSON (JavaScript Object Notation) é um formato de troca de dados que é amplamente utilizado para representar informações estruturadas. Ele é fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas. Aqui está uma explicação do conceito:

JSON é uma maneira de organizar dados em uma estrutura hierárquica composta por pares chave-valor. Cada chave é uma sequência de caracteres que identifica o valor associado a ela. Os valores podem ser strings, números, objetos, arrays, booleanos ou nulos. JSON é frequentemente usado em aplicações web para transmitir dados entre um servidor e um cliente, pois é um formato leve e eficiente.

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

## CARACTERISTICAS:
### Características Positivas:

1. **Simplicidade e Legibilidade:** JSON é fácil de ler e escrever para humanos, o que torna a manipulação de dados em JSON mais acessível.

2. **Leveza:** JSON é um formato de dados leve, o que significa que a sobrecarga de dados é mínima. Isso o torna eficiente em termos de tamanho de arquivo e largura de banda em aplicações web.

3. **Independente de Linguagem:** JSON pode ser usado em várias linguagens de programação. Quase todas as linguagens de programação modernas têm suporte para análise e geração de JSON.

4. **Estrutura Hierárquica:** A capacidade de representar dados em uma estrutura de chave-valor aninhada permite a organização e agrupamento de informações de maneira lógica.

5. **Ampla Aceitação:** JSON é amplamente adotado na indústria, tornando-o um formato de escolha para troca de dados entre sistemas e na construção de APIs.

### Características Negativas do JSON:

1. **Limitações no Tipo de Dados:** JSON oferece suporte a tipos de dados básicos, como strings, números, booleanos, objetos, arrays e nulos. No entanto, não possui tipos de dados especializados, como datas ou binários.

2. **Falta de Comentários:** JSON não suporta comentários, o que pode tornar a documentação de estruturas de dados mais desafiadora.

3. **Ausência de Semântica:** JSON não fornece semântica para descrever o significado dos dados. A interpretação dos dados depende do contexto em que são usados.

4. **Redundância de Dados:** JSON não oferece suporte a referências cruzadas eficientes, o que pode levar à redundância de dados em casos complexos.

5. **Ausência de Nomes de Chave Duplos:** Cada chave em um objeto JSON deve ser exclusiva, o que pode ser restritivo em algumas situações.

6. **Segurança:** Ao analisar JSON de fontes não confiáveis, pode haver riscos de segurança se as devidas precauções não forem tomadas.

Em resumo, JSON é uma escolha sólida para a maioria das necessidades de troca de dados devido à sua simplicidade, eficiência e ampla aceitação. No entanto, você deve estar ciente das suas limitações, especialmente se estiver lidando com tipos de dados complexos ou informações críticas de segurança. É importante considerar o contexto e os requisitos específicos do seu projeto ao decidir usar JSON ou outro formato de dados.
