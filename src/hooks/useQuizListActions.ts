import QuizStore from "../store/QuizStore";
import { useNavigate } from "react-router-dom";

export const useQuizListActions = () => {

  const navigate = useNavigate();

  const handleEdit = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/edit-quiz/${id}`);
  };

  const handleShow = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/show-quiz/${id}`);
  };

  const handleDelete = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation();
    QuizStore.deleteQuiz(id);
  };

  return { handleEdit, handleShow, handleDelete };
};