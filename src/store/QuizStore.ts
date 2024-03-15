import { makeAutoObservable } from "mobx";
import { IncomingQuiz, OutgoingQuiz, UpdateQuiz, IncomingQuestion } from "../types/quiz";
import QuizService from "../services/QuizService";

class QuizStore {
  quizzes: IncomingQuiz[] = [];
  selectedQuiz: IncomingQuiz | null = null;
  questions: IncomingQuestion[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuizzes = (quizzes: IncomingQuiz[]) => {
    this.quizzes = quizzes;
  }

  setQuestions = (questions: IncomingQuestion[]) => {
    this.questions = questions;
  }

  setLoading = (loading: boolean) => {
    this.loading = loading;
  }

  selectQuiz = (quiz: IncomingQuiz) => {
    this.selectedQuiz = quiz;
  }

  resetSelectedQuiz = () => {
    this.selectedQuiz = null;
  }
  
  fetchQuizzes = async () => {
    this.setLoading(true);
    try {
      const quizzes = await QuizService.fetchQuizzes();
      this.setQuizzes(quizzes);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.setLoading(false);
    }
  };

  fetchQuiz = async (id: number) => {
    this.setLoading(true);
    try {
      const quiz = await QuizService.fetchQuiz(id);
      this.selectQuiz(quiz);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.setLoading(false);
    }
  };

  addQuiz = async (quiz: OutgoingQuiz) => {
    await QuizService.addQuiz(quiz);
    this.fetchQuizzes();
  };

  updateQuiz = async (quiz: UpdateQuiz) => {
    await QuizService.updateQuiz(quiz);
    this.fetchQuizzes();
  };

  deleteQuiz = async (id: number) => {
    await QuizService.deleteQuiz(id);
    this.fetchQuizzes();
  };

  fetchAllQuestions = async () => {
    this.setLoading(true);
    try {
      const questions = await QuizService.fetchAllQuestions();
      this.setQuestions(questions);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }
}

export default new QuizStore();
