import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <About />
    </div>
  );
};

export default App;
