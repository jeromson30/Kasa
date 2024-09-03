import { createBrowserRouter} from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import RootBoundary from "./rootBoundary";
import '../assets/css/App.css';


const router = createBrowserRouter([
    {
      path: "/",
      element:     <div className="App"><Header/><Footer/></div>,
      errorElement: <div className="App"><Header/><RootBoundary /><Footer/></div>
    },
  ]);

export default router