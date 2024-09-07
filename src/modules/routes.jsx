import { createBrowserRouter} from "react-router-dom";
// import { useEffect, useLocation} from "react-hooks";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../assets/style/App.scss';
import RouteError from "./routeError";

// let curLoc = useLocation();

const router = createBrowserRouter([
    {
      path: "/",
      element:     <div className="App"><Header/><Main/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError /><Footer/></div>
    },
    {
      path: "/A-propos",
      element:     <div className="App"><Header/><Footer/></div>,
      errorElement: <div className="App"><Header/><RouteError /><Footer/></div>
    },
  ]);

  
  // useEffect(() => {
  //     document.title = 'Kasa :: Bienvenue'
  // }, [curLoc])
  
export default router