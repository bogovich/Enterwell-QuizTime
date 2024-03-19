import { useEffect, useState } from "react";
import QuizStore from "../store/QuizStore";
import { toast } from "react-hot-toast";

export const useFetchQuestions = () => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    QuizStore.fetchAllQuestions().catch(setError);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(`Error fetching existing questions`);
    }
  }, [error]);

  return { questionList: QuizStore.questions, error };
};