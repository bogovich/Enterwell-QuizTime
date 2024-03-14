import { useState, useEffect } from "react";
import { QuizFormType } from "../types/quiz";

export const useQuizForm = (initialQuiz: QuizFormType) => {
  const [quiz, setQuiz] = useState<QuizFormType>(
    initialQuiz || {
      name: "",
      questions: [],
    }
  );

  useEffect(() => {
    setQuiz(initialQuiz || {
      name: "",
      questions: [],
    });
  }, [initialQuiz]);
  
  const handleQuizChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { question: "", answer: "" }],
    });
  };

  const handleUpdateQuestion = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newQuestions = [...quiz.questions];
    newQuestions[index] = {
      ...newQuestions[index],
      [e.target.name]: e.target.value,
    };
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = quiz.questions.filter((_q, i) => i !== index);
    setQuiz({ ...quiz, questions: newQuestions });
  };

  return {
    quiz,
    handleQuizChange,
    handleAddQuestion,
    handleUpdateQuestion,
    handleRemoveQuestion,
  };
};
