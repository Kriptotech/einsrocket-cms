import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from '../pages/Home'
import Sidebar from '../components/Sidebar'

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar>
              <Home />
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  )
}

export default MainRoutes
