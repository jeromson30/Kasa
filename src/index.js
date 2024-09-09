import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/base/main.css';
import { RouterProvider} from "react-router-dom";
import router from './modules/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
