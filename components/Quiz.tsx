import styles from '../styles/Quiz.module.css'
import QuestionModel from '../model/question'
import Question from './Question'
import Button from './Button'
interface QuizProps {
  question: QuestionModel
  isTheLastQuestion: boolean
  onResponse: (question: QuestionModel) => void
  goNextQuestion: () => void
}

const Quiz = (props: QuizProps) => {
  function onResponse(index: number) {
    if (props.question.answered) {
      props.onResponse(props.question.replyWith(index))
    }
  }
  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question value={props.question} responseTime={10} onResponse={onResponse} timeRunsOut={props.goNextQuestion} />
      ) : false}
      <Button onClick={props.goNextQuestion} text={props.isTheLastQuestion ? "Finalizar" : "Próxima"} />
    </div>
  )
}

export default Quiz