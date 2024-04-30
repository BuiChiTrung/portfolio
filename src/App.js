import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Front from "./Front";
import AboutMe from "./AboutMe";
import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TRUNG BUI</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
      <Front>
      </Front>
      <AboutMe/>
    </div>

  );
}
