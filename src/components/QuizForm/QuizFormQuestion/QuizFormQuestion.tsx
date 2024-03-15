import {observer} from 'mobx-react-lite';

interface QuizQuestionProps {
  question: { question: string; answer: string };
  index: number;
  handleUpdateQuestion: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleRemoveQuestion: (index: number) => void;
}

const QuizFormQuestion = observer(({
  question,
  index,
  handleUpdateQuestion,
  handleRemoveQuestion,
}: QuizQuestionProps) => {
  return (
    <div key={index}>
      <h3>Question {index + 1}</h3>
      <input
        type="text"
        name="question"
        value={question.question}
        onChange={(e) => handleUpdateQuestion(e, index)}
        required
      />
      <h4>Answer</h4>
      <input
        type="text"
        name="answer"
        value={question.answer}
        onChange={(e) => handleUpdateQuestion(e, index)}
        required
      />
      <button type="button" onClick={() => handleRemoveQuestion(index)}>Remove</button>
    </div>
  );
});

export default QuizFormQuestion;
