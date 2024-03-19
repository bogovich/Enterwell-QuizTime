import { makeAutoObservable } from "mobx";
import {
  IncomingQuiz,
  OutgoingQuiz,
  UpdateQuiz,
  IncomingQuestion,
} from "../types/quiz";
import QuizService from "../services/QuizService";

class QuizStore {
  quizzes: IncomingQuiz[] = [];
  selectedQuiz: IncomingQuiz = {
    id: 0,
    name: "",
    questions: [],
  };
  questions: IncomingQuestion[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuizzes = (quizzes: IncomingQuiz[]) => {
    this.quizzes = quizzes;
  };

  setQuestions = (questions: IncomingQuestion[]) => {
    this.questions = questions;
  };

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  selectQuiz = (quiz: IncomingQuiz) => {
    this.selectedQuiz = quiz;
  };

  fetchQuizzes = async () => {
    this.setLoading(true);
    try {
      const quizzes = await QuizService.fetchQuizzes();
      this.setQuizzes(quizzes);
    } finally {
      this.setLoading(false);
    }
  };

  fetchQuiz = async (id: number) => {
    this.setLoading(true);
    try {
      const quiz = await QuizService.fetchQuiz(id);
      this.selectQuiz(quiz);
    } finally {
      this.setLoading(false);
    }
  };

  addQuiz = async (quiz: OutgoingQuiz) => {
    this.setLoading(true);
    try {
      await QuizService.addQuiz(quiz);
    } finally {
      this.setLoading(false);
    }
  };

  updateQuiz = async (quiz: UpdateQuiz) => {
    this.setLoading(true);
    try {
      await QuizService.updateQuiz(quiz);
    } finally {
      this.setLoading(false);
    }
  };

  deleteQuiz = async (id: number) => {
    this.setLoading(true);
    try {
      await QuizService.deleteQuiz(id);
      this.fetchQuizzes();
    } finally {
      this.setLoading(false);
    }
  };

  fetchAllQuestions = async () => {
    this.setLoading(true);
    try {
      const questions = await QuizService.fetchAllQuestions();
      this.setQuestions(questions);
    } finally {
      this.setLoading(false);
    }
  };
}

export default new QuizStore();
