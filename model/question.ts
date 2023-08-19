import shuffleArray from "../functions/shuffleArray"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #statement: string
  #options: AnswerModel[]
  #isRight: boolean

  constructor(id: number, statement: string, options: any[], isRight = false) {
    this.#id = id
    this.#statement = statement
    this.#options = options
    this.#isRight = isRight
  }

  get id() {
    return this.#id
  }
  get statement() {
    return this.#statement
  }
  get options() {
    return this.#options
  }
  get isRight() {
    return this.#isRight
  }
  get answered() {
    for (let answer of this.#options) {
      if (answer.isRight) return true
    }
    return false
  }

  replyWith(index: number): QuestionModel {
    const answers = this.#options.map((answer, i) => {
      return (index === i || answer.isRight) ? answer.revealAnswer() : answer
    })
    return new QuestionModel(this.#id, this.#statement, answers, this.#options[index]?.isRight)
  }

  shuffleAnswers(): QuestionModel {
    const scrambledAnswers = shuffleArray(this.#options);
    return new QuestionModel(this.#id, this.#statement, scrambledAnswers, this.#isRight);
  }

  static createUsingAnObject(object: QuestionModel): QuestionModel {
    const answers = object.options.map(ans => AnswerModel.createUsingAnObject(ans))
    return new QuestionModel(object.id, object.statement, answers,object.isRight)
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      isRight: this.#isRight,
      answered: this.answered,
      options: this.#options.map((answer) => answer.toObject()),
    }
  }
}