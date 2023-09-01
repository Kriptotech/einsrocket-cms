import CreateContext from './context/CreateContext'
import MainRoutes from './routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])
  return (
    <CreateContext>
      <MainRoutes />
    </CreateContext>
  )
}

export default App
