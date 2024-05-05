import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Front from "./Front";
import AboutMe from "./AboutMe";
import "./App.scss";
import Projects from "./Projects";
import Contact from "./Contact";
import NavbarWrapper from "./NavbarWrapper";

export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <NextUIProvider>
      <div className="App">
        <NavbarWrapper />
        <Front />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </NextUIProvider>
  );
}
