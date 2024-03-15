import { useEffect, useState } from "react";
import QuizStore from "../store/QuizStore";

export const useFetchQuestions = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    QuizStore.fetchAllQuestions().catch(setError);
  }, []);

  return { questionList: QuizStore.questions, error };
};