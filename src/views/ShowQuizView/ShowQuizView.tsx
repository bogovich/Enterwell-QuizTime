import QuizStore from "../../store/QuizStore";
import { observer } from "mobx-react-lite";
import { useFetchQuiz } from "../../hooks/useFetchQuiz";

const ShowQuizView = observer(() => {
    useFetchQuiz();


    if(QuizStore.loading) return (<h1>Loading...</h1>);
    if(!QuizStore.selectedQuiz) return (<h1>Quiz not found</h1>);

  return (
    <div>
      <h1>{QuizStore.selectedQuiz.name}</h1>
      <div>
        {QuizStore.selectedQuiz.questions.map((question, index) => (
          <div key={question.id}>
            <br />
            <span>Question number {index + 1}.</span>
            <br />
            <span><strong>Question:</strong></span>
            <span>{question.question}</span>
            <br />
            <span><strong>Answer:</strong></span>
            <span>{question.answer}</span>
            </div>
        ))}
      </div>
    </div>
  );
});

export default ShowQuizView;
