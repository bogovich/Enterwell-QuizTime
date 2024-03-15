import { useEffect, useState } from "react";
import QuizStore from "../store/QuizStore";

export const useFetchQuizzes = () => {
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    QuizStore.fetchQuizzes().catch(setError);
  }, []);

  return { quizzes: QuizStore.quizzes, error };
};