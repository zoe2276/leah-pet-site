import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import * as Pages from './pages/index';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Pages.Error />,
    children: [
      {
        errorElement: <Pages.Error />,
        children: [
          {
            path: "/",
            element: <Pages.UnderConstruction />
          },
          {
            path: "/contact",
            element: <Pages.Contact />
          },
          {
            path: "/about",
            element: <Pages.About />
          },
          {
            path: "/services",
            element: <Pages.Services />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
