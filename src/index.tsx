import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MojoPage from './components/MojoPage';
import SchedulerPage from './components/SchedulerPage';
import JunglePage from './components/JunglePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "mojo",
    element: <MojoPage/>,
  },
  {
    path: "scheduler",
    element: <SchedulerPage/>,
  },
  {
    path: "jungle",
    element: <JunglePage/>,
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
