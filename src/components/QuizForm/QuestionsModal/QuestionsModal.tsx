import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import QuizStore from '../../../store/QuizStore';
import {useEffect, useState} from 'react';
import QuestionsDropdown from '../QuestionsDropdown/QuestionsDropdown';
import { IncomingQuestion } from '../../../types/quiz';

const style = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  type QuestionsModalProps = {
    open: boolean;
    handleClose: () => void;
    handleAddChosenQuestions: (questions: IncomingQuestion[]) => void;
  }

  export default function QuestionsModal({ open, handleClose, handleAddChosenQuestions } : QuestionsModalProps) {

    useEffect(() => {
        QuizStore.fetchAllQuestions();
      }, []);

      const [questions, setQuestions] = useState<IncomingQuestion[]>([]);

      const handleAddAndClose = () => {
        handleAddChosenQuestions(questions);
        setQuestions([]);
        handleClose();
      }


    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
                <h2>Select from existing questions</h2>
                <QuestionsDropdown questionList={QuizStore.questions} questions={questions} setQuestions={setQuestions}/>
                <button onClick={handleAddAndClose} aria-label='Add'>Add</button>
            </Box>
        </Modal>
      </div>
    );
  }
  