import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegistrationForm from "./components/RegistrationForm";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/produtos/:id" element={<ProductDetailPage />} />
        <Route path="/cadastro" element={<RegistrationForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
