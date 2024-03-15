import { observer } from "mobx-react-lite";
import QuizFormQuestion from "./QuizFormQuestion/QuizFormQuestion";
import { useQuizForm } from "../../hooks/useQuizForm";
import { QuizFormType } from '../../types/quiz';
import QuestionsModal from './QuestionsModal/QuestionsModal';
import { useState } from 'react';

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
      alert('Please add at least one question before submitting.');
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
    <form onSubmit={handleFormSubmit}>
      <h2>Quiz name</h2>
      <input
        type="text"
        name="name"
        value={quiz.name}
        onChange={handleQuizChange}
        required
      />
      <h2>Questions</h2>
      <button onClick={handleAddQuestion}>Add New Question</button>
      {quiz.questions.map((q, index) => (
        <QuizFormQuestion
          key={index}
          question={q}
          index={index}
          handleUpdateQuestion={handleUpdateQuestion}
          handleRemoveQuestion={handleRemoveQuestion}
        />
      ))}
      <button onClick={handleOpen}>Add Existing Question</button>
      <QuestionsModal open={open} handleClose={handleClose} handleAddChosenQuestions={handleAddExistingQuestions}/>
      <button type="submit">Submit</button>
    </form>
  );
});

export default QuizForm;
