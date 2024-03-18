import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./QuizControls.module.scss";

type QuizControlsProps = {
  currentQuestion: number;
  questionsLength: number;
  handleNext: () => void;
  handlePrevious: () => void;
};

const QuizControls = ({
  currentQuestion,
  questionsLength,
  handleNext,
  handlePrevious,
}: QuizControlsProps) => (
  <div className={styles.quizControls}>
    {currentQuestion > 0 && (
      <Button
        className={styles.prevBtn}
        variant="outlined"
        size="small"
        onClick={handlePrevious}
        startIcon={<ArrowBackIcon />}
      >
        Previous
      </Button>
    )}
    {currentQuestion  < questionsLength && (
      <Button
        className={styles.nextBtn}
        variant="outlined"
        size="small"
        onClick={handleNext}
        startIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    )}
  </div>
);

export default QuizControls;
