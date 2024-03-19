import { observer } from "mobx-react-lite";
import { useFetchQuiz } from "../../hooks/useFetchQuiz";
import { useDisplayQuizControls } from "../../hooks/useDisplayQuizControls";
import styles from "./ShowQuizView.module.scss";
import QuizControls from "./QuizControls/QuizControls";
import QuizSlideContent from "./QuizSlideContent/QuizSlideContent";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";

const ShowQuizView = observer(() => {
  const { quiz, error } = useFetchQuiz();
  const { currentQuestion, handleNext, handlePrevious, resetCurrentQuestion } =
    useDisplayQuizControls();

  const { questions } = quiz;
  const questionsLength = questions.length;
  return (
    <div className={styles.container}>
      <h1>{quiz.name}</h1>
      <h2
        className={styles.slideNum}
        style={{
          visibility:
            currentQuestion + 1 > questionsLength ? "hidden" : "visible",
        }}
      >
        Question number {currentQuestion + 1}.
      </h2>
      <div className={styles.quizSlide}>
        {questionsLength !== 0 ? (
          <>
            <QuizSlideContent
              currentQuestion={currentQuestion}
              questions={questions}
              resetCurrentQuestion={resetCurrentQuestion}
            />
            <QuizControls
              currentQuestion={currentQuestion}
              questionsLength={questionsLength}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          </>
        ) : (
          <div className={styles.finalSlide}>
            <p>
              Error fetching questions! Please try again later.
              <br />
              <strong>Error: {error?.message}</strong>
              <Button variant="outlined" startIcon={<HomeIcon />}>
                Home
              </Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default ShowQuizView;
