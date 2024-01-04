'use client'

import React from "react";
import {Inter} from 'next/font/google'
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <NextUIProvider className="dark text-foreground bg-background">
            <body className={inter.className}>{children}</body>
        </NextUIProvider>
    )
}
