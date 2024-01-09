'use client'

import * as React from "react";

import NavbarComponent from "../components/navbar_component/navbar";
import {NextUIProvider} from "@nextui-org/react";
import HeroSection from "@/components/hero_section_component/hero_section";
import ServicesAndPricesComponent from "@/components/services_and_prices_component/services_and_prices";
import style from "./Page.module.css";
import AboutUsComponent from "@/components/about_us_component/about_us";

export default function Home() {
    return (
        <NextUIProvider>
            <NavbarComponent/>
            <HeroSection/>
            <div className={style.content}>
                <ServicesAndPricesComponent/>
                <AboutUsComponent />
            </div>
        </NextUIProvider>
    )
}
