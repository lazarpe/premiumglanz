'use client'

import * as React from "react";

import NavbarComponent from "../components/navbar_component/navbar";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
    return (
        <NextUIProvider>
            <NavbarComponent/>
        </NextUIProvider>
    )
}
