import QuestionAnswerPair from "./QuestionAnswerPair/QuestionAnswerPair";
import Button from "@mui/material/Button";
import styles from "../ShowQuizView.module.scss";

interface QuizContentProps {
  currentQuestion: number;
  questions: Array<{ question: string; answer: string; id: number }>;
  resetCurrentQuestion: () => void;
}

const QuizSlideContent = ({ currentQuestion, questions, resetCurrentQuestion } : QuizContentProps) => {
  if (currentQuestion < questions.length) {
    return (
      <QuestionAnswerPair
        question={questions[currentQuestion].question}
        answer={questions[currentQuestion].answer}
        key={questions[currentQuestion].id}
      />
    );
  }

  return (
    <div className={styles.finalSlide}>
      <h2>That's it!</h2>
      <p>You've reached the end of this quiz.</p>
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
  );
};

export default QuizSlideContent;