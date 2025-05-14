import { useRoutes } from "react-router-dom";
import routes from "./Utils/routes/routes";

const App = () => {
  const appRouter = useRoutes(routes);

  return appRouter;
};

export default App;
