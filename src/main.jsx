import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';


export const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
  },
  {
    path:'addCoffee',
    element:<AddCoffee/>
  },
  {
    path:'updateCoffee',
    element:<UpdateCoffee/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
