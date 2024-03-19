import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IncomingQuestion } from "../../../types/quiz";

type QuestionDropdownProps = {
  questionList: IncomingQuestion[];
  questions: IncomingQuestion[];
  setQuestions: (questions: IncomingQuestion[]) => void;
};

export default function QuestionsDropdown({
  questionList,
  questions,
  setQuestions,
}: QuestionDropdownProps) {
  return (
    <FormControl sx={{ mb: 2, width: "100%" }}>
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
        renderInput={(params) => <TextField {...params} label="Questions" />}
      />
    </FormControl>
  );
}
