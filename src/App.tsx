import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import About from "./pages/about_us";
import ContactPage from "./pages/contact_us";
import Menu from "./pages/menu";
import Testimonials from "./pages/testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
