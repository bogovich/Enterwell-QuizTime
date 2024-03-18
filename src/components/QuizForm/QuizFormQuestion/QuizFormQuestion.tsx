import {observer} from 'mobx-react-lite';
import styles from './QuizFormQuestion.module.scss';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Tooltip from "@mui/material/Tooltip";

interface QuizQuestionProps {
  question: { id?: number, question: string; answer: string };
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
    <div key={index} className={`${styles.formField} ${question.id ? styles.existing : styles.new}`}>
      <h3 className={styles.title}>Question {index + 1}</h3>
      <TextField
          id="outlined-multiline-flexible"
          label="Question"
          multiline
          name="question"
          value={question.question}
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdateQuestion(e, index)}
          required
          InputProps={{
            readOnly: question.id ? true : false,
          }}
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
          InputProps={{
            readOnly: question.id ? true : false,
          }}
        />
      <Tooltip title="Remove" placement="top" arrow>
        <IconButton
          aria-label="remove question"
          size="large"
          className={styles.removeButton}
          onClick={() => handleRemoveQuestion(index)}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
});

export default QuizFormQuestion;
