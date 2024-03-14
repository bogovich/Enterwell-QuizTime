import { observer } from "mobx-react-lite";
import QuizFormQuestion from "./QuizFormQuestion/QuizFormQuestion";
import { useQuizForm } from "../../hooks/useQuizForm";
import { QuizFormType } from '../../types/quiz';

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
  } = useQuizForm(initialQuiz);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(quiz);
  };

  return (
    <div>
      <h2>Quiz name</h2>
      <input
        type="text"
        name="name"
        value={quiz.name}
        onChange={handleQuizChange}
      />
      <h2>Questions</h2>
      {quiz.questions.map((q, index) => (
        <QuizFormQuestion
          key={index}
          question={q}
          index={index}
          handleUpdateQuestion={handleUpdateQuestion}
          handleRemoveQuestion={handleRemoveQuestion}
        />
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
});

export default QuizForm;
