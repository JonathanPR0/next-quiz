import questions from "../questionData"
export default function QuestionAPI(req: any, res: any) {
  const idQuestion = +req.query.id;
  const questionFound = questions.filter(q => q.id === idQuestion)

  if (questionFound.length === 1) {
    return res.status(200).json(questionFound[0].shuffleAnswers().toObject())
  } else {
    return res.status(204).send()
  }
}