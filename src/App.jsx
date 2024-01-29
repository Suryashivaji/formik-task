import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const APL_URL ='https://6598c2bba20d3dc41ceeec81.mockapi.io/Task'

function App() {
 const routes = createBrowserRouter(AppRoutes)

  return<>

  <RouterProvider router={routes}/>
  </>

}

export default App

