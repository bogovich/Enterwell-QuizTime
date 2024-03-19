import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import QuizStore from '../store/QuizStore';
import { toast } from "react-hot-toast";

export const useFetchQuiz = () => {
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    QuizStore.fetchQuiz(Number(id)).catch(setError);
  }, [id]);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching quiz! Please try again later.");
    }
  }, [error]);

  return { quiz: QuizStore.selectedQuiz, error };
};