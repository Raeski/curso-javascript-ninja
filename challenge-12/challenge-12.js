(function () {
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person  = {
      name: 'Gustavo'
      lastname: 'Raeski'
      age: 20
  };
  console.log( 'Propriedades de "+person+":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));
  
  

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */  
  books.push({name: 'Harry Potter e o Calice de fogo', pages: 600 });
  books.push({name: 'Harry Potter e o Prizioneiro de Azkabam', pges: 550 });
  books.push({name: 'Harry Potter e a Camera Secreta', pges: 350 });
  
  console.log( '\nLista de livros: '+books+' ');

  /*
  Mostre no console todos os livros.
  */
  console.log("books.name");
  

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  delete books[2];
  true
  
  console.log( '\nAgora sobraram somente os livros:'+books+');
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
   
  books.toString();
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);
  /*
  Converta os livros novamente para objeto.
  */
  // ?
  books.reverse();
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // ?

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  var myName  = ['g','u','s','t','a','v','o'];
  console.log( '\nMeu nome é:+myName+'');

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?
  myName.join(['']);
  console.log( '\nMeu nome é:+myName+'');

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?
  myName.reverse();
  console.log( '\nMeu nome invertido é:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  myName.sort();
  console.log( '\nAgora em ordem alfabética:' );
})()
