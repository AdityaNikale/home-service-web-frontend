import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeServicePage from "./components/HomeServicePage";
import BookingPage from "./components/BookingPage";
import ServicesListPage from "./components/ServicesListPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginSignupPage from "./components/navbar/LoginSignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import TermsPrivacyPage from "./components/TermsPrivacyPage";
import ToastProvider from "./components/ToastProvider";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <ToastProvider />
      <Routes>
        <Route path="/" element={<HomeServicePage />} />
        <Route path="/login" element={<LoginSignupPage />} />

        {/* this is protected route  */}
        <Route element={<ProtectedRoute />}>
        <Route path="/book/:id" element={<BookingPage />} /> 
        </Route>

        <Route path="/results" element={<ServicesListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPrivacyPage />} />
      </Routes>
    </Router>
  );
}
