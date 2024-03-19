import { toast } from 'react-hot-toast';
import QuizStore from '../store/QuizStore';
import { useNavigate } from "react-router-dom";
import { OutgoingQuiz } from '../types/quiz';

export const useAddQuiz = () => {
  const navigate = useNavigate();

  const handleAddQuiz = async (quiz: OutgoingQuiz) => {
    const toastId = toast.loading('Adding quiz...', { position: 'bottom-center' });
    try {
      await QuizStore.addQuiz(quiz);
      toast.success('Quiz added!', { id: toastId, position: 'bottom-center' });
      setTimeout(() => {
        toast.success('Redirecting to home page...', {
          duration: 5000,
          icon: '🏠',
          position: 'bottom-center',
        });
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }, 2000);
    } catch (error) {
      toast.error('Error adding quiz! Please try again later.', { id: toastId });
    }
  };

  return { handleAddQuiz };
};