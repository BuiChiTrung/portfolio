import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Front from "./Front";
import AboutMe from "./AboutMe";
import "./App.scss";
import Projects from "./Projects";
import Contact from "./Contact";
import NavbarWrapper from "./NavbarWrapper";

export default function App() {
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    const onScroll = () =>
      setPageOffset(Math.floor(window.scrollY / window.innerHeight));
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NextUIProvider>
      <div className="App">
        <NavbarWrapper pageOffset={pageOffset} />
        <Front />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </NextUIProvider>
  );
}
