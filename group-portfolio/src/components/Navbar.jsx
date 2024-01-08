import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-32 text-white text-4xl ">
      <div className="flex w-1/2 pl-40">
        <h1>Test 2.0</h1>
      </div>
      <div className="flex gap-5 w-1/2 pl-44">
        <h1>About</h1>
        <h1>Home</h1>
        <h1>Projects</h1>
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default Navbar;
