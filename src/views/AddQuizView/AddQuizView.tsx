import QuizForm from "../../components/QuizForm/QuizForm";
import { OutgoingQuiz } from "../../types/quiz";
import styles from "./AddQuizView.module.scss";
import { useAddQuiz } from "../../hooks/useAddQuiz";


const AddQuizView = () => {

    const { handleAddQuiz } = useAddQuiz();

    const initialQuiz: OutgoingQuiz = {
        name: "",
        questions: [],
    };

    return (
        <div className={styles.container}>
            <h1>Add new quiz</h1>
        <QuizForm handleSubmit={handleAddQuiz} initialQuiz={initialQuiz}/>
        </div>
    );
};

export default AddQuizView;