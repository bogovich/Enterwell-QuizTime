import { observer } from "mobx-react-lite";
import QuizStore from "../../store/QuizStore";
import { useEffect } from "react";
import QuizzesTable from "./QuizzesTable/QuizzesTable";

const QuizzesView = observer(() => {

  useEffect(() => {
    QuizStore.fetchQuizzes();
  }, []);

  return (
    <div className="container">
      <h1>Quizzes by Rejd</h1>
      <QuizzesTable data={QuizStore.quizzes} />
    </div>
  );
});

export default QuizzesView;
