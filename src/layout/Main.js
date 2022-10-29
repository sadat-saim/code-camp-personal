import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  const [theme, setTheme] = useState("mytheme");
  const myRef = useRef();
  const handleThemeChange = (e) => {
    e.preventDefault();
    console.log("function called", e);
    if (theme === "mytheme") {
      myRef.current.setAttribute("data-theme", "lightTheme");
      setTheme("lightTheme");
    } else {
      myRef.current.setAttribute("data-theme", "mytheme");
      setTheme("mytheme");
    }
  };
  return (
    <div ref={myRef} data-theme="mytheme" className=" transition-all">
      <Header handleThemeChange={handleThemeChange}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
