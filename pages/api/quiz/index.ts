import shuffleArray from "../../../functions/shuffleArray";
import questions from "../questionData";

export default function QuizAPI(req: any, res: any) {
  const ids = questions.map(question => question.id);
  return res.status(200).json(shuffleArray(ids));
}