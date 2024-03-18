import { useNavigate, useLocation } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddQuiz = () => {
    navigate('/add-quiz');
  }

  const shouldHideButton = location.pathname.includes('/show-quiz/');

  return { handleAddQuiz, shouldHideButton };
};