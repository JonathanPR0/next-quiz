import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(
    100,
    'Qual a função principal de JavaScript?',
    [
      AnswerModel.wrongAnswer('Lidar com interatividade.'),
      AnswerModel.wrongAnswer('Criar gráficos animados.'),
      AnswerModel.rightAnswer('Adicionar interatividade a páginas da web.'),
      AnswerModel.wrongAnswer('Enviar e-mails.'),
    ]
  ),
  new QuestionModel(
    101,
    'Quais são os três tipos de dados básicos em JavaScript?',
    [
      AnswerModel.wrongAnswer('Caracteres, números e datas.'),
      AnswerModel.wrongAnswer('Objetos, funções e strings.'),
      AnswerModel.rightAnswer('Números, strings e booleanos.'),
      AnswerModel.wrongAnswer('Arrays, objetos e eventos.'),
    ]
  ),
  new QuestionModel(
    102,
    'Como você ordena um array em JavaScript?',
    [
      AnswerModel.rightAnswer('array.sort();'),
      AnswerModel.wrongAnswer('array.reverse();'),
      AnswerModel.wrongAnswer('array.slice(0, indice);'),
      AnswerModel.wrongAnswer('array.slice(indice, indice + 10);'),
    ]
  ),
  new QuestionModel(
    103,
    'Como você remove um elemento de um array em JavaScript?',
    [
      AnswerModel.wrongAnswer('array.shift();'),
      AnswerModel.wrongAnswer('array.splice(indice, 1);'),
      AnswerModel.rightAnswer('array.pop();'),
      AnswerModel.wrongAnswer('array.delete(elemento);'),
    ]
  ),
  new QuestionModel(
    104,
    'Método para adicionar elemento a uma matriz (array) em JavaScript?',
    [
      AnswerModel.wrongAnswer('concat()'),
      AnswerModel.wrongAnswer('slice()'),
      AnswerModel.wrongAnswer('splice()'),
      AnswerModel.rightAnswer('push()'),
    ]
  ),
  new QuestionModel(
    105,
    'Diferença entre `null` e `undefined` em JavaScript?',
    [
      AnswerModel.rightAnswer('`null` para valor desconhecido, `undefined` padrão não inicializado.'),
      AnswerModel.wrongAnswer('`null` e `undefined` iguais.'),
      AnswerModel.wrongAnswer('`null` para objetos, `undefined` para funções.'),
      AnswerModel.wrongAnswer('`undefined` palavra-chave JavaScript.'),
    ]
  ),
  new QuestionModel(
    107,
    'O que é um "loop" em JavaScript?',
    [
      AnswerModel.rightAnswer('Estrutura de controle para repetição baseada em condição.'),
      AnswerModel.wrongAnswer('Tipo de variável.'),
      AnswerModel.wrongAnswer('Tipo de função.'),
      AnswerModel.wrongAnswer('Declaração condicional.'),
    ]
  ),
  new QuestionModel(
    108,
    'Como você usa uma condição em JavaScript?',
    [
      AnswerModel.rightAnswer('if (condicao) { ... }'),
      AnswerModel.wrongAnswer('switch (condicao) { ... }'),
      AnswerModel.wrongAnswer('while (condicao) { ... }'),
      AnswerModel.wrongAnswer('for (condicao) { ... }'),
    ]
  ),
  new QuestionModel(
    109,
    'Como comentar código em JavaScript?',
    [
      AnswerModel.rightAnswer('// Comentário de linha.'),
      AnswerModel.wrongAnswer('/* Comentário de bloco */'),
      AnswerModel.wrongAnswer('# Comentário inválido.'),
      AnswerModel.wrongAnswer('-- Comentário inválido.'),
    ]
  ),
  new QuestionModel(
    110,
    'O que é o DOM em JavaScript?',
    [
      AnswerModel.rightAnswer('Representação acessível de estrutura HTML/XML.'),
      AnswerModel.wrongAnswer('Linguagem de programação.'),
      AnswerModel.wrongAnswer('Biblioteca de design.'),
      AnswerModel.wrongAnswer('Tipo de variável.'),
    ]
  ),
  new QuestionModel(
    111,
    'O que é o escopo em JavaScript?',
    [
      AnswerModel.wrongAnswer('Nome de variável.'),
      AnswerModel.rightAnswer('Contexto de variáveis e funções.'),
      AnswerModel.wrongAnswer('Operador lógico.'),
      AnswerModel.wrongAnswer('Tamanho de página da web.'),
    ]
  ),
  new QuestionModel(
    112,
    'Função do operador "typeof" em JavaScript?',
    [
      AnswerModel.wrongAnswer('Adição de números.'),
      AnswerModel.rightAnswer('Retorna tipo de dados.'),
      AnswerModel.wrongAnswer('Definir um loop.'),
      AnswerModel.wrongAnswer('Nenhuma das alternativas.'),
    ]
  ),
]

export default questions