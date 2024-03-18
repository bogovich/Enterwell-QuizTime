import { observer } from "mobx-react-lite";
import QuizFormQuestion from "./QuizFormQuestion/QuizFormQuestion";
import { useQuizForm } from "../../hooks/useQuizForm";
import { QuizFormType } from "../../types/quiz";
import QuestionsModal from "./QuestionsModal/QuestionsModal";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./QuizForm.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type QuizFormProps = {
  handleSubmit: (quiz: QuizFormType) => void;
  initialQuiz: QuizFormType;
};

const QuizForm = observer(({ handleSubmit, initialQuiz }: QuizFormProps) => {
  const {
    quiz,
    handleQuizChange,
    handleAddQuestion,
    handleUpdateQuestion,
    handleRemoveQuestion,
    handleAddExistingQuestions,
  } = useQuizForm(initialQuiz);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (quiz.questions.length === 0) {
      alert("Please add at least one question before submitting.");
      return;
    }
    handleSubmit(quiz);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form className={styles.quizForm} onSubmit={handleFormSubmit}>
      <h2>Quiz name</h2>
      <TextField
        id="quiz-name"
        label="Quiz Name"
        value={quiz.name}
        onChange={handleQuizChange}
        name="name"
        required
        fullWidth
        variant="standard"
      />
      <h2>Questions</h2>
      <Stack spacing={2} className={styles.questionBtns} direction="row">
        <Button variant="contained" size="small" onClick={handleAddQuestion}>
          Add New Question
        </Button>
        <Button variant="outlined" size="small" onClick={handleOpen}>
          Add Existing Question
        </Button>
      </Stack>
      {quiz.questions.map((q, index) => (
        <QuizFormQuestion
          key={index}
          question={q}
          index={index}
          handleUpdateQuestion={handleUpdateQuestion}
          handleRemoveQuestion={handleRemoveQuestion}
        />
      ))}
      <QuestionsModal
        open={open}
        handleClose={handleClose}
        handleAddChosenQuestions={handleAddExistingQuestions}
      />
      {quiz.questions.length !== 0 && <button type="submit">Submit</button>}
    </form>
  );
});

export default QuizForm;
