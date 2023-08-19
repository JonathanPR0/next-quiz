export default class AnswerModel {
  #value: string
  #isRight: boolean
  #isRevealed: boolean

  constructor(value: string, isRight = false, isRevealed = false) {
    this.#value = value
    this.#isRight = isRight
    this.#isRevealed = isRevealed
  }

  static rightAnswer(value: string) {
    return new AnswerModel(value, true)
  }

  static wrongAnswer(value: string) {
    return new AnswerModel(value, false)
  }

  get value() {
    return this.#value
  }
  get isRight() {
    return this.#isRight
  }
  get isRevealed() {
    return this.#isRevealed
  }

  revealAnswer() {
    return new AnswerModel(this.#value, this.#isRight, true)
  }

  static createUsingAnObject(object: AnswerModel): AnswerModel {
    return new AnswerModel(object.value, object.isRight, object.isRevealed)
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      isRevealed: this.#isRevealed,
    }
  }
}