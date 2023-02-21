import "./App.scss";
import "./scss/null.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import Contacts from "./page/Contacts/Contacts";
import About from "./page/About/About";
import Blog from "./page/Blog/Blog";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
