import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NextUIProvider,
} from "@nextui-org/react";
import Front from "./Front";
import AboutMe from "./AboutMe";
import "./App.scss";

export default function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navbar maxWidth="xl">
          <NavbarBrand>
            <p className="font-bold text-inherit nav-brand">TRUNG BUI</p>
          </NavbarBrand>
          <NavbarContent className="lg:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#" className="nav-link">
                About Me
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                href="#"
                color="warning"
                aria-current="page"
                className="nav-link"
              >
                Experience
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="nav-link">
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="nav-link">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Front />
        <AboutMe />
      </div>
    </NextUIProvider>
  );
}
