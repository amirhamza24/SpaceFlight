import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Pages/Home.jsx';
import Context from './components/Pages/Context.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
        <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
