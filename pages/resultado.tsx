import { useRouter } from 'next/router'
import styles from "../styles/Resultados.module.css"
import React from 'react'
import Statistics from '../components/Statistics'
import Button from '../components/Button'

export default function Resultado() {
  const router = useRouter()

  const total = +router.query.total
  const rightAnswers = +router.query.rightAnswers
  const percents = Math.round((rightAnswers / total) * 100)

  return (
    <div className={styles.resultados}>
      <h1>Resultado Final</h1>
      <div className={styles.container}>
        <Statistics text='Perguntas' value={total} />
        <Statistics text='Certas' value={rightAnswers} backgroundColor='#9cd2a4' />
        <Statistics text='Percentual' value={`${percents}%`} backgroundColor='#de6a33' />
      </div>
      <Button href='/' text='Tente Novamente' />
    </div>
  )
}