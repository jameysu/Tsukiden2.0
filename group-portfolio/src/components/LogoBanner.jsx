import React from "react";
import "../App.css";
import "../assets/icons/logoStyle.css";
import TailwindIcon from "../assets/icons/tailwind";
import HtmlIcon from "../assets/icons/html";
import CssIcon from "../assets/icons/css";
import SpringIcon from "../assets/icons/spring";
import JsIcon from "../assets/icons/js";
import JavaIcon from "../assets/icons/java";
import MySqlIcon from "../assets/icons/mysql";
import CsharpIcon from "../assets/icons/csharp";
import ReactIcon from "../assets/icons/react";
import PhpIcon from "../assets/icons/php";

const colorList = {
  white: "#f9f9f9",
};

const logoList = [
  {
    name: "Tailwind",
    icon: <TailwindIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "Html",
    icon: <HtmlIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "Css",
    icon: <CssIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "Spring",
    icon: <SpringIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "JS",
    icon: <JsIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "Java",
    icon: <JavaIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "MySQL",
    icon: <MySqlIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "C#",
    icon: <CsharpIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "React",
    icon: <ReactIcon classStyle="logo-style" color={colorList.white} />,
  },
  {
    name: "PHP",
    icon: <PhpIcon classStyle="logo-style" color={colorList.white} />,
  },
];

const LogoSlide = () => {
  return (
    <div className="logo-list">
      {logoList.map((logo) => {
        return <span key={logo.name}>{logo.icon}</span>;
      })}
    </div>
  );
};

const LogoBanner = () => {
  return (
    <div className="logo-banner">
      <LogoSlide />
      <LogoSlide />
    </div>
  );
};
export default LogoBanner;
