import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Operation from "./components/Operation";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operation" element={<Operation />} />
      </Routes>
    </Router>
  );
}

export default App;
