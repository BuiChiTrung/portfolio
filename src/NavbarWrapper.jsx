import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavbarWrapper() {
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
          "data-[active=true]:after:bg-primary",
        ],
      }}
      maxWidth="2xl"
      isBordered
    >
      <NavbarBrand>
        <p className="font-bold text-inherit nav-brand">TRUNG BUI</p>
      </NavbarBrand>
      <NavbarContent className="lg:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#about-me" className="nav-link">
            AboutMe
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects" className="nav-link">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className="nav-link">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
