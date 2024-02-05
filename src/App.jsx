import { useState } from "react";
import Nav from "./components/Nav";
import BannerSection from "./components/BannerSection";
import "./App.css";

function App() {
  return (
    <>
      <Nav profile="/images/profile-img.jpeg" />
      <BannerSection/>
    </>
  );
}

export default App;
