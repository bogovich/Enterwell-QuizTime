
import QuizStore from "../store/QuizStore";
import { useState, useEffect, useCallback } from "react";

export const useDisplayQuizControls = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = useCallback(() => {
      setCurrentQuestion((prevQuestion) =>
        QuizStore.selectedQuiz &&
        prevQuestion <= QuizStore.selectedQuiz.questions.length - 1
          ? prevQuestion + 1
          : prevQuestion
      );
    }, []);
  
    const handlePrevious = useCallback(() => {
      setCurrentQuestion((prevQuestion) =>
        prevQuestion > 0 ? prevQuestion - 1 : prevQuestion
      );
    }, []);

    const resetCurrentQuestion = useCallback(() => {
      setCurrentQuestion(0);
    }, []);
  
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case "ArrowLeft":
            handlePrevious();
            break;
          case "ArrowRight":
            handleNext();
            break;
          default:
            break;
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleNext, handlePrevious]);

    return { currentQuestion, handleNext, handlePrevious, resetCurrentQuestion };

};