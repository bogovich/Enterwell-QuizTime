import api from "./ApiService";
import { OutgoingQuiz, UpdateQuiz } from "../types/quiz";

const QuizService = {
  fetchQuizzes: async () => {
    const response = await api.get("/quizzes");
    return response.data;
  },
  fetchQuiz: async (id: number) => {
    const response = await api.get(`/quizzes/${id}`);
    return response.data;
  },
  addQuiz: async (quiz: OutgoingQuiz) => {
    await api.post("/quizzes", quiz);
  },
  updateQuiz: async (quiz: UpdateQuiz) => {
    await api.put(`/quizzes/${quiz.id}`, quiz);
  },
  deleteQuiz: async (id: number) => {
    await api.delete(`/quizzes/${id}`);
  },
  fetchAllQuestions: async () => {
    const response = await api.get("/questions");
    return response.data;
  },
};

export default QuizService;
