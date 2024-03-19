import { toast } from "react-hot-toast";
import QuizStore from "../store/QuizStore";
import { UpdateQuiz } from "../types/quiz";

export const useEditQuiz = () => {
  const handleUpdateQuiz = async (quiz: UpdateQuiz) => {
    const toastId = toast.loading("Updating quiz...", {
      position: "bottom-center",
    });
    try {
      await QuizStore.updateQuiz(quiz);
      toast.success("Quiz updated", { id: toastId, position: "bottom-center" });
    } catch (error) {
      toast.error("Error updating quiz! Please try again later.", {
        id: toastId,
      });
    }
  };

  return { handleUpdateQuiz };
};
