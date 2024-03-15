import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { IncomingQuestion } from '../../../types/quiz';

type QuestionDropdownProps = {
  questionList: IncomingQuestion[];
  questions: IncomingQuestion[];
  setQuestions: (questions: IncomingQuestion[]) => void;
}


export default function QuestionsDropdown({questionList, questions, setQuestions} : QuestionDropdownProps) {

  return (
    <div>
      <FormControl sx={{ m: 1, width: 500 }}>
        <Autocomplete
          multiple
          id="demo-multiple-name"
          disableCloseOnSelect
          options={questionList}
          getOptionLabel={(option) => option.question}
          value={questions}
          onChange={(_event, newValue) => {
            setQuestions(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Name" />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <div style={{ maxHeight: '100px', overflow: 'auto' }}>
                <Chip variant="outlined" label={option.question} {...getTagProps({ index })} />
              </div>
            ))
          }
        />
      </FormControl>
    </div>
  );
}