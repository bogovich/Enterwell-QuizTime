import NavBar from "./components/NavBar/NavBar";
import QuizzesView from "./views/QuizzesView/QuizzesView";
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
        element: <QuizzesView />,
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
