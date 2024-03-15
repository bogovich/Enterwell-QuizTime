import QuizStore from "../../store/QuizStore";
import { observer } from "mobx-react-lite";
import { useFetchQuiz } from "../../hooks/useFetchQuiz";
import { useDisplayQuizControls } from "../../hooks/useDisplayQuizControls";
import QuestionAnswerPair from "./QuestionAnswerPair/QuestionAnswerPair";
import styles from "./ShowQuizView.module.scss";

const ShowQuizView = observer(() => {
  useFetchQuiz();
  const { currentQuestion, handleNext, handlePrevious } = useDisplayQuizControls();


  if (QuizStore.loading) return <h1>Loading...</h1>;
  if (!QuizStore.selectedQuiz) return <h1>Quiz not found</h1>;

  return (
    <div className={styles.container}>
      <h1>{QuizStore.selectedQuiz.name}</h1>
      <span className={styles.slideNum}>
        Question number {currentQuestion + 1}.
      </span>
      <div className={styles.quizSlide}>
        <QuestionAnswerPair
          question={QuizStore.selectedQuiz.questions[currentQuestion].question}
          answer={QuizStore.selectedQuiz.questions[currentQuestion].answer}
          key={QuizStore.selectedQuiz.questions[currentQuestion].id}
        />
        <div className={styles.controlQuiz}>
          <button className={styles.controlBtn} onClick={handlePrevious}>
            Previous
          </button>
          <button className={styles.controlBtn} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
});

export default ShowQuizView;
