import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="flex items-center justify-between p-4 bg-white border-b">
          <h1 className="text-xl font-bold">Form Handling Demo</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600">Controlled</Link>
            <Link to="/formik" className="text-blue-600">Formik</Link>
          </nav>
        </header>

        <main className="py-8">
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/formik" element={<FormikForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}