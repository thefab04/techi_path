import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoadmapCard from "./components/RoadmapCard";
import Roadmap from "./pages/Roadmap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap/:role" element={<Roadmap />} />
            </Routes>
        </main>
      <Footer />
      </Router>
    </div>

  );
}

export default App;
