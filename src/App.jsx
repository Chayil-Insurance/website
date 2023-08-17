import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/sign-up" />
      </Routes>
    </Router>
  )
}

export default App