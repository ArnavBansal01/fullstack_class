import React from "react";
import BehindWindows from "../assets/Behind windows.mp4";
function Header() {
  return (
    <header>
      <h1>Arnav Bansal</h1>
      <video src={BehindWindows} controls />
      <p>Welcome to my React app!</p>
    </header>
  );
}
export default Header;