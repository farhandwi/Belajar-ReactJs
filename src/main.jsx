/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './Pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErorPage from './pages/404.jsx'
import ProductsPage from './pages/products'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErorPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>,
    errorElement: <ErorPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>,
    errorElement: <ErorPage/>
  },
  {
    path: "/product",
    element: <ProductsPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
