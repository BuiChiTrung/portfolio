import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

export default function NavbarWrapper(props) {
  const [pagesIsActive, setPagesIsActive] = useState([false, false, false]);

  const changeActivePage = useCallback(
    (page) => {
      if (page < 0 || pagesIsActive[page]) return;
      let newPagesIsActive = pagesIsActive.map((_, index) => index === page);
      setPagesIsActive(newPagesIsActive);
    },
    [pagesIsActive]
  );

  useEffect(() => {
    changeActivePage(props.pageOffset);
  }, [props.pageOffset, changeActivePage]);

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
        <Link color="foreground" href="#" className="nav-brand">
          TRUNG BUI
        </Link>
      </NavbarBrand>
      <NavbarContent className="lg:flex gap-8" justify="center">
        <NavbarItem isActive={pagesIsActive[0]}>
          <Link color="foreground" href="#about-me" className="nav-link">
            AboutMe
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pagesIsActive[1]}>
          <Link color="foreground" href="#projects" className="nav-link">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pagesIsActive[2]}>
          <Link color="foreground" href="#contact" className="nav-link">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
