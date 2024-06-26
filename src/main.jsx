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
      loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'addCoffee',
    element:<AddCoffee/>
  },
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee/>,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
