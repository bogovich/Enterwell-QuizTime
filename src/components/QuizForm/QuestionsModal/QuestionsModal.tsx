import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import QuestionsDropdown from "../QuestionsDropdown/QuestionsDropdown";
import { useFetchQuestions } from "../../../hooks/useFetchQuestions";
import { IncomingQuestion } from "../../../types/quiz";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type QuestionsModalProps = {
  open: boolean;
  handleClose: () => void;
  handleAddChosenQuestions: (questions: IncomingQuestion[]) => void;
};

export default function QuestionsModal({
  open,
  handleClose,
  handleAddChosenQuestions,
}: QuestionsModalProps) {
  const { questionList, error } = useFetchQuestions();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
    textAlign: "center",
    "& h2": {
      marginBottom: 1,
    },
    "& p": {
      marginBottom: 2,
    },
  };

  const [chosenQuestions, setChosenQuestions] = useState<IncomingQuestion[]>(
    []
  );

  const resetAndClose = () => {
    setChosenQuestions([]);
    handleClose();
  };

  const handleAddAndClose = () => {
    handleAddChosenQuestions(chosenQuestions);
    resetAndClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={resetAndClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {error ? (
          <p>Error fetching questions! Please try again later.</p>
        ) : (
          <>
            {" "}
            <h2>Select from existing questions</h2>
            <p>
              Search and add questions from the list below to your quiz. You can
              add as many questions as you like.
            </p>
            <QuestionsDropdown
              questionList={questionList}
              questions={chosenQuestions}
              setQuestions={setChosenQuestions}
            />
          </>
        )}
        <Button
          variant="contained"
          onClick={handleAddAndClose}
          disabled={chosenQuestions.length === 0}
        >
          Add questions
        </Button>
      </Box>
    </Modal>
  );
}
