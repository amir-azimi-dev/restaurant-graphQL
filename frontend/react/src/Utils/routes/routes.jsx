import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard/*",
    element: <Dashboard />,
  },
];

export default routes;
