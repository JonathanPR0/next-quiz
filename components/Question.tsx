import React from 'react';
import QuestionModel from '../model/question';
import styles from '../styles/Question.module.css';
import Statement from './Statement';
import Answer from './Answer';
import Timer from './Timer';

const letters = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
]

interface QuestionProps {
  value: QuestionModel
  responseTime: number
  onResponse: (index: number) => void
  timeRunsOut: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.options.map((answer, i) => {
      return <Answer value={answer} index={i} letter={letters[i].value} letterBackgroudColor={letters[i].color} key={`${question.id}-${i}`} onResponse={props.onResponse} />
    })
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer key={question.id} duration={props.responseTime} timeRunsOut={props.timeRunsOut} />
      {renderAnswers()}
    </div>
  )
}