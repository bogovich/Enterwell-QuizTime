import QuizStore from "../store/QuizStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
    const toastId = toast.loading("Deleting quiz...");
    try {
      QuizStore.deleteQuiz(id);
      toast.success("Quiz deleted", { id: toastId });
    } catch (error) {
      toast.error("Error deleting quiz! Please try again later.", {
        id: toastId,
      });
    }
  };

  return { handleEdit, handleShow, handleDelete };
};
