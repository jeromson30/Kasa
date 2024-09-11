import { createBrowserRouter} from "react-router-dom";
import Logement from '../components/LogementP';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Footer from '../components/Footer';
import RouteError from './routeError';

const router = createBrowserRouter([
    {
      path: "/",
      element:     <div className="App"><Header/><Home/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError /><Footer/></div>
    },
    {
      path: "/A-propos",
      element:     <div className="App"><Header/><About/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError /><Footer/></div>
    },
    {
      name: "logement",
      path: "/logement/:logementId",
      element:     <div className="App"><Header/><Logement/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError /><Footer/></div>
    },
  ]);
  
export default router