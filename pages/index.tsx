import React, { useState, useEffect } from "react";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";
import Quiz from "../components/Quiz";
import { useRouter } from "next/router";

const BASE_URL = "https://jon-next-quiz.vercel.app/api"

export default function Home() {
  const router = useRouter()

  const [idQuestions, setIdQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswers, setRightAnswers] = useState<number>(0)

  async function loadIdQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const loadIdQuestions = await resp.json()
    console.log(loadIdQuestions);

    setIdQuestions(loadIdQuestions)
  }
  async function loadQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/question/${idQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingAnObject(json)

    setQuestion(newQuestion)
  }
  function onResponse(question: QuestionModel) {
    setQuestion(question)
    setRightAnswers(rightAnswers + (question.isRight ? 1 : 0))
  }
  function idNextQuestion() {
    const nextIndex = idQuestions.indexOf(question?.id) + 1
    return idQuestions[nextIndex]
  }
  function nextStep() {
    const nextId = idNextQuestion();
    console.log(nextId);

    nextId ? goNextQuestion(nextId) : finish()
  }
  function goNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }
  function finish() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idQuestions.length,
        rightAnswers: rightAnswers
      }
    })
  }

  useEffect(() => {
    loadIdQuestions()
  }, [])

  useEffect(() => {
    idQuestions.length > 0 && loadQuestion(idQuestions[0])
  }, [idQuestions])

  return question && (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
      <Quiz question={question} isTheLastQuestion={idNextQuestion() === undefined} onResponse={onResponse} goNextQuestion={nextStep} />
    </div>
  )
}
