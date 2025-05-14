import { useRoutes } from "react-router-dom";
import routes from "./Utils/routes/routes";


const App = () => {
  const appRouter = useRoutes(routes);

  // console.log(loading, data);

  return appRouter;
};

export default App;
