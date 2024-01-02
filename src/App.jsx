import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import Productspage from './pages/Productspage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Contactpage />} path="/contact-us" />
        <Route element={<Aboutpage />} path="/about-us" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/sign-up" />
        <Route element={<Productspage />} path="/services" />
      </Routes>
    </Router>
  )
}

export default App
