import { useFetchQuiz } from "../../hooks/useFetchQuiz";
import { useEditQuiz } from "../../hooks/useEditQuiz";
import QuizForm from "../../components/QuizForm/QuizForm";
import QuizStore from "../../store/QuizStore";
import { observer } from "mobx-react-lite";
import { QuizFormType } from "../../types/quiz";
import styles from "./EditQuizView.module.scss";

const EditQuizView = observer(() => {
  useFetchQuiz();
    const { handleUpdateQuiz } = useEditQuiz();

return (
    <div className={styles.container}>
        <h1>Edit quiz</h1>
        <QuizForm
            handleSubmit={handleUpdateQuiz as (quiz: QuizFormType) => void}
            initialQuiz={QuizStore.selectedQuiz || {"name": "", "questions": []}}
        />
    </div>
);
});

export default EditQuizView;
