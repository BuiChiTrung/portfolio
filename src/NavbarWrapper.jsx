import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

export default function NavbarWrapper() {
  const [aboutMeActive, setAboutMeActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <Navbar
      id="navbar"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-warning",
        ],
      }}
      maxWidth="2xl"
      isBordered
    >
      <NavbarBrand>
        <p className="font-bold text-inherit nav-brand">TRUNG BUI</p>
      </NavbarBrand>
      <NavbarContent className="lg:flex gap-8" justify="center">
        <NavbarItem isActive={aboutMeActive}>
          <Link
            color="foreground"
            href="#about-me"
            className="nav-link"
            onClick={() => {
              setAboutMeActive(true);
              setContactActive(false);
              setProjectsActive(false);
              console.log("about me");
            }}
          >
            AboutMe
          </Link>
        </NavbarItem>
        <NavbarItem isActive={projectsActive}>
          <Link
            color="foreground"
            href="#projects"
            className="nav-link"
            onClick={() => {
              setAboutMeActive(false);
              setProjectsActive(true);
              setContactActive(false);
              console.log("about me");
            }}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={contactActive}>
          <Link
            color="foreground"
            href="#contact"
            className="nav-link"
            onClick={() => {
              setAboutMeActive(false);
              setProjectsActive(false);
              setContactActive(true);
              console.log("about me");
            }}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
