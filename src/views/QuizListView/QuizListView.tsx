import { observer } from "mobx-react-lite";
import QuizStore from "../../store/QuizStore";
import { useEffect } from "react";
import QuizListTable from "./QuizListTable/QuizListTable";
import { useNavigate } from "react-router-dom";

const QuizListView = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    QuizStore.fetchQuizzes();
  }, []);

  const handleEdit = () => {
    console.log("edit");
  };

  const handleShow = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/show-quiz/${id}`);
  };

  const handleDelete = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation();
    QuizStore.deleteQuiz(id);
  };
  return (
    <div className="container">
      <h1>Quizzes by Rejd</h1>
      <QuizListTable
        data={QuizStore.quizzes}
        handleEdit={handleEdit}
        handleShow={handleShow}
        handleDelete={handleDelete}
      />
    </div>
  );
});

export default QuizListView;
