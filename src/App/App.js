import React from 'react'
import { RouteList } from 'config/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function App() {
  const routerList = RouteList()
  const router = createBrowserRouter([...routerList])
  return (
    <RouterProvider router={router} />
  )
}
