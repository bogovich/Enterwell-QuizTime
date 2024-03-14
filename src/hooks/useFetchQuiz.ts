import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizStore from '../store/QuizStore';

export const useFetchQuiz = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    QuizStore.fetchQuiz(Number(id));
  }, [id]);
};