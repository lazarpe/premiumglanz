"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Logo } from "@/assets/logo";
import AccordionComponent from "@/components/accordion_component/accordion";
import styles from "./Navbar.module.css";
import DropdownComponent from "@/components/dropdown_component/dropdown";
import { info } from "autoprefixer";

export default function NavbarComponent() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path, sectionId) => {
    closeMenu();
    router.push(`${path}#${sectionId}`);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <Link href={"/"} color={"foreground"}>
        <NavbarContent className="sm:hidden pr-3" justify="start">
          <NavbarBrand>
            <Logo width={36} height={36} />
            <p className="font-bold text-inherit">PREMIUMGLANZ</p>
          </NavbarBrand>
        </NavbarContent>
      </Link>
      <NavbarContent
        className="hidden sm:flex"
        justify="center"
        style={{ position: "absolute", left: "15%" }}
      >
        <Link href={"/"} color={"foreground"}>
          <NavbarBrand>
            <Logo width={36} height={36} />
            <p className="font-bold text-inherit">PREMIUMGLANZ</p>
          </NavbarBrand>
        </Link>
        <NavbarItem>
          <Link color="foreground" href="#">
            <DropdownComponent />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={"foreground"}
            style={{ marginLeft: -15 }}
            onClick={() => handleNavigation("/", "about-us")}
          >
            Über uns
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            onClick={() => handleNavigation("/", "contact")}
          >
            Kontakt
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="primary"
            style={{ fontWeight: "bold" }}
            onClick={() => handleNavigation("/", "contact")}
          >
            Termin buchen
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <AccordionComponent />
        </NavbarMenuItem>
        <NavbarMenuItem style={{ marginTop: -5 }}>
          <Link
            className={styles.link}
            color={"foreground"}
            size="lg"
            onClick={() => handleNavigation("/", "about-us")}
          >
            Über uns
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={styles.link}
            color={"foreground"}
            size="lg"
            onClick={() => handleNavigation("/", "contact")}
          >
            Kontakt
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={styles.link}
            color={"primary"}
            size="lg"
            onClick={() => handleNavigation("/", "contact")}
          >
            Termin buchen
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
