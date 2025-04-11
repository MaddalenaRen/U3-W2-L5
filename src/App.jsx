import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MeteoNavbar from "./components/MeteoNavbar";
import MeteoFooter from "./components/MeteoFooter";
import Dettagli from "./components/Dettagli";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <MeteoNavbar />
        <main className="flex-grow-1 bg-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dettagli/:cityName" element={<Dettagli />} />
          </Routes>
        </main>
        <MeteoFooter />
      </div>
    </Router>
  );
}

export default App;
