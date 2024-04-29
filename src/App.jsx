import React from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LandingPage } from './pages/LandingPage'

const App = () => {
  const Routing = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
      {index: true, element: <LandingPage/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={Routing}>

      </RouterProvider>
    </>
  )
}

export default App