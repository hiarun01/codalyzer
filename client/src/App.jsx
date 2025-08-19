import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
// import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
