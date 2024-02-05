import { useState } from "react";
import Nav from "./components/Nav";
import BannerSection from "./components/BannerSection";
import "./App.css";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Nav profile="/images/profile-img.jpeg" />
      <BannerSection/>
      <MainSection />
    </>
  );
}

export default App;
