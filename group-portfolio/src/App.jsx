import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LogoBanner from "./components/LogoBanner";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <About />
      <LogoBanner />
    </div>
  );
};

export default App;
