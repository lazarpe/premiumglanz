'use client'

import React from "react";
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en" className="dark text-foreground bg-background">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
