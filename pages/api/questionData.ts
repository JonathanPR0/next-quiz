import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(112, "Qual é o comando correto para criar um novo projeto React?", [
    AnswerModel.wrongAnswer("npm create-react myApp"),
    AnswerModel.wrongAnswer("npm create-react-app myApp"),
    AnswerModel.wrongAnswer("npx create-react-app"),
    AnswerModel.rightAnswer("npx create-react-app my-app"),
  ]),
  new QuestionModel(123, "Qual comando é usado para iniciar o servidor de desenvolvimento local React?", [
    AnswerModel.wrongAnswer("npm developer"),
    AnswerModel.wrongAnswer("npm start"),
    AnswerModel.wrongAnswer("npx myApp"),
    AnswerModel.rightAnswer("npm run dev"),
  ]),
  new QuestionModel(235, "Ao renderizar uma lista usando o JavaScript método map(), o que é necessário para cada elemento renderizado?", [
    AnswerModel.wrongAnswer("Map"),
    AnswerModel.wrongAnswer("ID"),
    AnswerModel.wrongAnswer("Prop"),
    AnswerModel.rightAnswer("Key"),
  ]),
  new QuestionModel(358, "Qual é a sintaxe correta para importar um componente do React?", [
    AnswerModel.wrongAnswer("import Component from 'react';"),
    AnswerModel.wrongAnswer("import Component from 'reactjs';"),
    AnswerModel.wrongAnswer("import [ Component ] from 'react';"),
    AnswerModel.rightAnswer("import { Component } from 'react';"),
  ])
]

export default questions