import NavBar from "./components/NavBar/NavBar";
import QuizListView from "./views/QuizListView/QuizListView";
import ShowQuizView from "./views/ShowQuizView/ShowQuizView";
import AddQuizView from './views/AddQuizView/AddQuizView';
import EditQuizView from "./views/EditQuizView/EditQuizView";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './styles/global.scss';

const HeaderLayout = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="main">
      <Outlet />
    </main>
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <QuizListView />,
      },
      {
        path: "/show-quiz/:id",
        element: <ShowQuizView />,
      },
      {
        path: "/add-quiz",
        element: <AddQuizView />,
      },
      {
        path: "/edit-quiz/:id",
        element: <EditQuizView />,
      },
      {
        path: "*",
        element: <h1>Not found</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
