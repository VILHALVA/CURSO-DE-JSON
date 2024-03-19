let data = {
    "pessoas": [
      {
        "nome": "Carlos",
        "idade": 42,
        "cidade": "São Paulo"
      },
      {
        "nome": "João",
        "idade": 35,
        "cidade": "Rio de Janeiro"
      },
      {
        "nome": "Ana",
        "idade": 28,
        "cidade": "Belo Horizonte"
      }
    ],
    "comentarios": [
      {
        "id": 1,
        "conteudo": "Olá, Carlos! Como vai?",
        "autor": "Carlos"
      },
      {
        "id": 2,
        "conteudo": "João, parabéns pelos 35 anos!",
        "autor": "Andrea"
      }
    ]
  };
  
  // CREATE
  function adicionarPessoa(nome, idade, cidade) {
    data.pessoas.push({ nome, idade, cidade });
  }
  
  function adicionarComentario(conteudo, autor) {
    const novoId = data.comentarios.length + 1;
    data.comentarios.push({ id: novoId, conteudo, autor });
  }
  
  // READ
  function obterTodasPessoas() {
    return data.pessoas;
  }
  
  function obterTodosComentarios() {
    return data.comentarios;
  }
  
  // UPDATE
  function atualizarIdadePessoa(nome, novaIdade) {
    const pessoa = data.pessoas.find(p => p.nome === nome);
    if (pessoa) {
      pessoa.idade = novaIdade;
    } else {
      console.log(`Pessoa ${nome} não encontrada.`);
    }
  }
  
  function atualizarConteudoComentario(id, novoConteudo) {
    const comentario = data.comentarios.find(c => c.id === id);
    if (comentario) {
      comentario.conteudo = novoConteudo;
    } else {
      console.log(`Comentário com ID ${id} não encontrado.`);
    }
  }
  
  // DELETE
  function excluirPessoa(nome) {
    data.pessoas = data.pessoas.filter(p => p.nome !== nome);
  }
  
  function excluirComentario(id) {
    data.comentarios = data.comentarios.filter(c => c.id !== id);
  }
  
  // Exemplos de uso:
  adicionarPessoa("Maria", 30, "Curitiba");
  adicionarComentario("Ana, como está o tempo em Belo Horizonte?", "Pedro");
  console.log(obterTodasPessoas());
  console.log(obterTodosComentarios());
  atualizarIdadePessoa("João", 36);
  atualizarConteudoComentario(1, "Olá, Carlos! Como vai? Tudo bem por aí?");
  console.log(obterTodasPessoas());
  console.log(obterTodosComentarios());
  excluirPessoa("Ana");
  excluirComentario(2);
  console.log(obterTodasPessoas());
  console.log(obterTodosComentarios());
  