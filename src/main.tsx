import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThankYouPage from './pages/thankyou.tsx';
import Form from './components/Form.tsx';

const router = createBrowserRouter([
  {
    path: "/Vite-TailwindCSS-React-Newsletter-Sign-Up-Form/",
    element: <App />,
    children: [
      {
        path: "/Vite-TailwindCSS-React-Newsletter-Sign-Up-Form/",
        element: <Form />,
      },
      {
        path: "/Vite-TailwindCSS-React-Newsletter-Sign-Up-Form/thankyou",
        element: <ThankYouPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
