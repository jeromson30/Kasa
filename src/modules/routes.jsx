import { createBrowserRouter} from "react-router-dom";
import LogementPage from '../pages/LogementP';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Footer from '../components/Footer';
import PageError from '../pages/pageError';
import RouteError from "./routeError";

const router = createBrowserRouter([
    {
      path: "/",
      element:     <div className="App"><Header/><Home/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError/><Footer/></div>
    },
    {
      path: "/A-propos",
      element:     <div className="App"><Header/><About/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError/><Footer/></div>
    },
    {
      name: "logement",
      path: "/logement/:logementId",
      element:     <div className="App"><Header/><LogementPage/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError/><Footer/></div>
    },
    {
      name: "pageError",
      path: "/error",
      element:     <PageError />
    },
  ]);
  
export default router