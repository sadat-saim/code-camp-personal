import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PremiumAccess from "./components/PermiumAccess/PremiumAccess";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Blogs from "./components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/home",
        element: <Hero></Hero>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () =>
          fetch("https://codecamp-server-sadat-saim.vercel.app/"),
      },
      {
        path: "/course/:id",
        element: <Details></Details>,
        loader: async ({ params }) =>
          fetch(`https://codecamp-server-sadat-saim.vercel.app/${params.id}`),
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <PremiumAccess></PremiumAccess>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`https://codecamp-server-sadat-saim.vercel.app/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: (
          <h2 className="text-4xl text-center h-[60vh] grid place-content-center uppercase">
            FAQ will be added soon
          </h2>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
