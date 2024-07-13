'use client'

import * as React from "react";

import NavbarComponent from "../components/navbar_component/navbar";
import {NextUIProvider} from "@nextui-org/react";
import HeroSection from "@/components/hero_section_component/hero_section";
import ServicesAndPricesComponent from "@/components/services_and_prices_component/services_and_prices";
import style from "./Page.module.css";
import AboutUsComponent from "@/components/about_us_component/about_us";
import FormComponent from "@/components/form_component/form";
import Footer from "@/components/footer_component/footer";
import heroImage from "@/assets/img/lambo-politur.jpg";

export default function Home() {
    return (
        <NextUIProvider>
            <NavbarComponent/>
            <HeroSection image={heroImage} headerOne={"PREMIUM"} headerTwo={"GLANZ"} description={"Präzise Pflege und leidenschaftliche Expertise – für den Glanz, den Ihr Auto verdient."}/>
            <div className={style.content}>
                <ServicesAndPricesComponent/>
                <AboutUsComponent/>
                <FormComponent/>
                <Footer/>
            </div>
        </NextUIProvider>
    )
}
