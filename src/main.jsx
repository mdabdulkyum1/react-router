import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


import About from './components/About/About';

import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserD from './components/UserD/UserD';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users') ,
        element: <Users />
      },
      {
        path: "/users/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserD/>
      }
    ],
  }, 
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
