import { useState } from "react";
import Nav from "./components/Nav";
import BannerSection from "./components/BannerSection";
import "./App.css";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav profile="/images/profile-img.jpeg" />
      <BannerSection/>
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
