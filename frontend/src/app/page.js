'use client'

import * as React from "react";

import NavbarComponent from "../components/navbar_component/navbar";
import {NextUIProvider} from "@nextui-org/react";
import HeroSection from "@/components/hero_section_component/hero_section";

export default function Home() {
    return (
        <NextUIProvider>
            <NavbarComponent/>
            <HeroSection/>
        </NextUIProvider>
    )
}
