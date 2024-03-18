import QuizStore from "../../store/QuizStore";
import { observer } from "mobx-react-lite";
import { useFetchQuiz } from "../../hooks/useFetchQuiz";
import { useDisplayQuizControls } from "../../hooks/useDisplayQuizControls";
import QuestionAnswerPair from "./QuestionAnswerPair/QuestionAnswerPair";
import Button from "@mui/material/Button";
import styles from "./ShowQuizView.module.scss";
import QuizControls from "./QuizControls/QuizControls";

const ShowQuizView = observer(() => {
  useFetchQuiz();
  const { currentQuestion, handleNext, handlePrevious, resetCurrentQuestion } =
    useDisplayQuizControls();

  if (QuizStore.loading) return <h1>Loading...</h1>;
  if (!QuizStore.selectedQuiz) return <h1>Quiz not found</h1>;

  const { selectedQuiz } = QuizStore;
  const { questions } = selectedQuiz;
  const questionsLength = questions.length;

  return (
    <div className={styles.container}>
      <h1>{selectedQuiz.name}</h1>
      <h2 className={styles.slideNum}>
        Question number {currentQuestion + 1}.
      </h2>
      <div className={styles.quizSlide}>
        {currentQuestion + 1 < questions.length ? (
          <QuestionAnswerPair
            question={questions[currentQuestion].question}
            answer={questions[currentQuestion].answer}
            key={questions[currentQuestion].id}
          />
        ) : (
          <div className={styles.finalSlide}>
            <h2>That's it!</h2>
            <p>
              You've reached the end of this quiz.
            </p>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={resetCurrentQuestion}
              className={styles.tryAgainButton}
            >
              Try again
            </Button>

          </div>
        )}
        <QuizControls
          currentQuestion={currentQuestion}
          questionsLength={questionsLength}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  );
});

export default ShowQuizView;
