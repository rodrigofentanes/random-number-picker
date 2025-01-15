/* 

  typeof - Muito util para debugar  v,

*/

const boo = 7;

console.log(typeof boo);


/* 

  Desestruturacao

*/

const alunos = ['Joedson', 'Neiva'];
const medias = ['5', '3'];
const lista = [alunos, medias];

function functionName(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista; // Desestruturacao
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(aluno + ' tem media ' + mediaAluno);
  }

  else {
    console.log('Aluno nao existe');
  }
}

/* 

  for

*/

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

/*

  for...of é muito util para percorrer um lista de valores (Array)

*/

for (const element of elements) {
  console.log(element);
}

// OR

for (const [key, value] of elements) {
  listFromToNumbers.push(value);
}

/*

  O for...in é muito util para percorrer valores dentro de um Objeto

  Lembrando que para motrar um valor em uma chave devemos fazer como abaixo:
  - console.log(student['name']);

*/

for (let chave in student) {
  console.log(chave); // Mostra o nome da chave (Ex.: nome, idade, sexo, etc)
  // Abaixo não é necessário colocar o valor entre aspas simples
  console.log(student[chave]); // Retorna os valores dentro de cada CHAVE do objeto student (Ex.: Carlos, 35, Masculino, etc) 
  console.log(student.chave); // Retorna os valores dentro de cada CAMPO do objeto student (Ex.: Carlos, 35, Masculino, etc)
  
  const tipoDeDado = typeof student[chave];

  if (tipoDeDado !== 'object' && tipoDeDado !== 'function') { // Esta linha serve para os casos em que o retorno é do tipo [object Object] ou [function]
    const texto = `A chave ${chave} tem o valor ${student[chave]}!`
    console.log(texto);
  }
}

/* 

  forEach
  É um metodo callback - O parametro que passamos no metodo é uma funcao que é chamada de volta. Ou seja, é uma funcao que chama outra funcao.
  Este metodo nao retorna dado algum (undefined)

*/

elements.forEach(function (element) {
  console.log(element);
});

// OR

elements.forEach(element => {
  console.log(element);
});

// OR

elements.forEach(functionName); // Aqui nao foi necessario passar os parametros da funcao "functionName" pois internamente o forEach ja faz este tratamento

function functionName(element) {
  console.log(element);
}

// OR

elements.forEach((key, value) => {
  console.log(key);
  console.log(value);
});

/* 

  map
  É um metodo callback - O parametro que passamos no metodo é uma funcao que é chamada de volta. Ou seja, é uma funcao que chama outra funcao.
  Este metodo retorna dados.

*/

const notas = [9, 8, 7.5, 6];

const notasMaisUm = notas.map((nota) => nota + 1);

/* 

  Underscore para ocultar parametros
  Utilizado para quando precisamos manter as ordem de insercao dos parametros mas nao precisamos utilizar algum deles

*/

const notas = [9, 8, 7.5, 6];

const reprovados = notas.filter((_, indice) => notas[indice] < 7);

/* 

  Reduce - É um acumulador, reduz todos os valores para um só

*/

const notas = [9, 8, 7.5, 6];

const somaDasNotas = notas.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0); // Zero é o valor inicial que será reduzido, ou seja "acumulador" terá valor inicial Zero.

/* 
  
  Clonagem de listas/arrays e seus comportamentos

*/

const notas = [9, 8, 7.5, 6];
const cloneNotas = notas; // Atribuicao por referencia

cloneNotas.push(10); // Neste caso tanto o valor de "notas" quanto o de "cloneNotas" será alterado para [9, 8, 7.5, 6, 10]

// Para fazer um clone de lista que nao seja apenas um "ponteiro/referencia" para a lista clonada, devemos fazer:

const notas = [9, 8, 7.5, 6];
const cloneNotas = [...notas]; // Spread operator. Aqui pegamos os valores de uma lista e jogamos dentro de uma nova lista.

/* 
  
  Set()

*/

const listaDeValoresUnicos = new Set(); // Cria uma lista de valores que nao se repetem

/* 
  Funcao declarada
  Hoisting - significa içar, levantar, puxar para cima
  Dessa forma funcoes declaradas sao puxadas para o topo do arquivo
  Provavemente sao compiladas antes da execucao

*/

function functionName (param) {
  return param;
}

/* 

  Expressao de funcao - Funcao nao declarada 
  Nao sao puxadas para o todo do arquivo
  So sao reconhecidas em tempo de execucao e dependem da linha em que estao sendo chamadas

*/

const constantName = function (param) {
  return param;
}

/* 
  Expressao de funcao - Arrow function 
  Nao sao puxadas para o todo do arquivo
  So sao reconhecidas em tempo de execucao e dependem da linha em que estao sendo chamadas

*/
const constantName1 = (param) => {
  return param;
}

//

const constantName2 = (param) => param;

/* 

  Javascript object - Sao compostos de chave (name) e valor ('Bob')

*/

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Create an Object with properties
const studentObject = {
  name: 'Bob',
  age: '33',
  city: 'new york',
  everage: 7.5,
  isApproved: function (baseEverage) { // Nao é possivel utilizar uma rrow function aqui justamtente pela caracterisca de nao ser Hoisting
    return this.everage >= baseEverage ? true : false;
  },
  mainAddress: {
    street: 'rua tal',
    neighborhood: 'bairro tal',
    city: 'cidade tal',
    country: 'pais tal'
  },
  addresses: [
    {
      street: 'rua acola',
      neighborhood: 'bairro acola',
      city: 'cidade acola',
      country: 'pais acola'
    },
    {
      street: 'outra rua',
      neighborhood: 'outra bairro',
      city: 'outra cidade',
      country: 'outra pais'
    }
  ]
}

console.log(studentObject.name);
console.log(studentObject.age);
console.log(studentObject.city);
console.log(studentObject['name']);
console.log(studentObject['age']);
console.log(studentObject['city']);
console.log(studentObject['documentNumber']); // Esta chave de valor nao existe e o JS nao informa um erro, apenas mostra o valor 'undefined'

studentObject.documentNumber = '12938273642'; // Adiciona o novo campo ao objeto

/* 

  Javascript object

*/

const student = {
  name: 'Bob',
  age: '33',
  city: 'new york'
}

/* Util */

Object.keys(obj); // Retorna um Array contendo todas as CHAVES dentro de um Objeto
Object.values(obj); // Retorna um Array contendo todas os VALORES dentro de um Objeto
Object.entries(obj); // Retorna um Array contendo todas as COMBINAÇÕES de CHAVE e VALOR dentro de um Objeto

// Podemos utilizar o Spread operator para espalhar os dados de um objeto e assim conseguir lê-los de forma mais eficiente
function showAddresses(data1, data2) {
  console.log('First address: ' + data1);
  console.log('Second address: ' + data2);
}

showAddresses(...studentObject.addresses);