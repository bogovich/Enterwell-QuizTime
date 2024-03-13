import { makeAutoObservable } from "mobx";
import api from "../services/api";
import { Quiz, Question } from "../types/quiz";

class QuizStore {
  quizzes: Quiz[] = [];
  selectedQuiz = null;
  questions: Question[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setQuizzes = (quizzes: Quiz[]) => {
    this.quizzes = quizzes;
  }

  setQuestions = (questions: Question[]) => {
    this.questions = questions;
  }

  fetchQuizzes = async () => {
      const response = await api.get("/quizzes");
      this.setQuizzes(response.data);
  };


}

export default new QuizStore();
