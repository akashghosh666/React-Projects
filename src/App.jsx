import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/home.scss";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/Contact.scss";
import "./styles/Header.scss";
import "./styles/services.scss";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
