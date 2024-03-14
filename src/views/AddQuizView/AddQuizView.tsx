import { useEffect } from "react";
import QuizForm from "../../components/QuizForm/QuizForm";
import { OutgoingQuiz } from "../../types/quiz";
import QuizStore from "../../store/QuizStore";

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
        <div>
            <h1>Add new quiz</h1>
        <QuizForm handleSubmit={handleAddQuiz} initialQuiz={initialQuiz}/>
        </div>
    );
};

export default AddQuizView;