import { useEffect, useState } from "react";
import QuizStore from "../store/QuizStore";
import { toast } from "react-hot-toast";

export const useFetchQuizzes = () => {
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    QuizStore.fetchQuizzes().catch(setError);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching quizzes! Please try again later.");
    }
  }, [error]);

  return { quizzes: QuizStore.quizzes };
};