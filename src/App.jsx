import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Protected from "./pages/Protected.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/protected" element={isAuthenticated ? <Protected setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;