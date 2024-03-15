import {observer} from 'mobx-react-lite';
import styles from './QuizFormQuestion.module.scss';
import TextField from '@mui/material/TextField';

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
    <div key={index} className={styles.formField}>
      <h3>Question {index + 1}</h3>
      <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          name="question"
          value={question.question}
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdateQuestion(e, index)}
          required
        />
      <h4>Answer</h4>
      <TextField
          id="outlined-multiline-flexible"
          label="Answer"
          multiline
          name="answer"
          value={question.answer}
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdateQuestion(e, index)}
          required
        />
      <button type="button" onClick={() => handleRemoveQuestion(index)}>Remove</button>
    </div>
  );
});

export default QuizFormQuestion;
