'use client'

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import {Logo} from "@/assets/logo";
import AccordionComponent from "@/components/accordion_component/accordion";
import styles from "./Navbar.module.css";
import DropdownComponent from "@/components/dropdown_component/dropdown";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >

            <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>
                    <Logo/>
                    <p className="font-bold text-inherit">PREMIUMGLANZ</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start" style={{left: -100}}>
                <NavbarBrand>
                    <Logo/>
                    <p className="font-bold text-inherit">PREMIUMGLANZ</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        <DropdownComponent/>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={"foreground"} href="#" style={{marginLeft: -15}}>
                        Über uns
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Kontakt
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="primary" href="#" style={{fontWeight: "bold"}}>
                        Termin buchen
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <AccordionComponent/>
                </NavbarMenuItem>
                <NavbarMenuItem style={{marginTop: -5}}>
                    <Link
                        className={styles.link}
                        color={"foreground"}
                        href="#"
                        size="lg"
                    >
                        Über uns
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className={styles.link}
                        color={"foreground"}
                        href="#"
                        size="lg"
                    >
                        Kontakt
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className={styles.link}
                        color={"primary"}
                        href="#"
                        size="lg"

                    >
                        Termin buchen
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}
