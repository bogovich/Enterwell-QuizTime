import { useEffect } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import { OutgoingQuiz } from "../../types/quiz";
import QuizStore from "../../store/QuizStore";
import styles from "./AddQuizView.module.scss";

const AddQuizView = () => {

    useEffect(() => {
        QuizStore.resetSelectedQuiz();
    }, []);

    const handleAddQuiz = (quiz: OutgoingQuiz) => {
        QuizStore.addQuiz(quiz);
    };

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