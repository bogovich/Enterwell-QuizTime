import api from "./ApiService";
import { IncomingQuestion, OutgoingQuiz, UpdateQuiz } from "../types/quiz";
import { IncomingQuiz } from "../types/quiz";

const QuizService = {
  fetchQuizzes: async (): Promise<IncomingQuiz[]> => {
    const response = await api.get<IncomingQuiz[]>("/quizzes");
    return response.data;
  },
  fetchQuiz: async (id: number): Promise<IncomingQuiz> => {
    const response = await api.get<IncomingQuiz>(`/quizzes/${id}`);
    return response.data;
  },
  addQuiz: async (quiz: OutgoingQuiz): Promise<void> => {
    await api.post("/quizzes", quiz);
  },
  updateQuiz: async (quiz: UpdateQuiz): Promise<void> => {
    await api.put(`/quizzes/${quiz.id}`, quiz);
  },
  deleteQuiz: async (id: number): Promise<void> => {
    await api.delete(`/quizzes/${id}`);
  },
  fetchAllQuestions: async (): Promise<IncomingQuestion[]> => {
    const response = await api.get<IncomingQuestion[]>("/questions");
    return response.data;
  },
};

export default QuizService;