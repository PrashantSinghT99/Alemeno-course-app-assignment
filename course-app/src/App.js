import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Fallback/Error";
import CourseDetail from "./Components/CourseDetail/CourseDetail";
import CourseListing from "./Components/CourseListing/CourseListing";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/Login/SignUp.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
const AppLayout = () => (
  <>
    <Header />
    <CourseListing />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/course",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/details/:id",
    element: <CourseDetail />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Error />} />
    </div>
  );
}

export default App;
