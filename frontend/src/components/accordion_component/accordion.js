'use client'

import React from "react";
import {Accordion, AccordionItem, Link} from "@nextui-org/react";
import styles from "./Accordion.module.css"

export default function AccordionComponent() {
    return (
        <Accordion>
            <AccordionItem className={styles.accordionTitle} key="1" aria-label="DiensteUndPreise"
                           title="Dienste und Preise">
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Politur und Lackversiegelung
                </Link>
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Nanoversiegelung Fenster und Scheiben
                </Link>
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Felgenreinigung
                </Link>
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Innenreinigung Express
                </Link>
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Innenreinigung Premium
                </Link>
                <Link
                    className={styles.link}
                    color={"foreground"}
                    href="#"
                    size="lg"
                >
                    Politur und Lackversiegelung
                </Link>
            </AccordionItem>
        </Accordion>
    );
}