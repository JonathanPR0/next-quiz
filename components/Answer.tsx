import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer"

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBackgroudColor: string
  onResponse: (index: number) => void
}

const Answer = (props: AnswerProps) => {
  const answer = props.value
  const answerRevealed = answer.isRevealed ? styles.answerRevealed : ""
  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={`${answerRevealed} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div className={styles.letter} style={{ backgroundColor: props.letterBackgroudColor }}>{props.letter}</div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}>
          {answer.isRight ? (
            <div className={styles.rightAnswer}>
              <span>A resposta certa é...</span>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrongAnswer}>
              <span>A resposta informada está errada...</span>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Answer