"use client";

import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import styles from "./Accordion.module.css";

export default function AccordionComponent() {
  return (
    <Accordion>
      <AccordionItem
        className={styles.accordionTitle}
        key="1"
        aria-label="DiensteUndPreise"
        title="Dienste und Preise"
      >
        <Link
          className={styles.link}
          color={"foreground"}
          href="/politur"
          size="lg"
        >
          Politur und Lackversiegelung
        </Link>
        <Link
          className={styles.link}
          color={"foreground"}
          href="/nano"
          size="lg"
        >
          Nanoversiegelung Fenster und Scheiben
        </Link>
        <Link
          className={styles.link}
          color={"foreground"}
          href="/impraegnierung"
          size="lg"
        >
          Imprägnierung und Reinigung Cabrio-Dach
        </Link>
        <Link
          className={styles.link}
          color={"foreground"}
          href="/felgenreinigung"
          size="lg"
        >
          Felgenreinigung
        </Link>
        <Link
          className={styles.link}
          color={"foreground"}
          href="/innenreinigung-express"
          size="lg"
        >
          Innenreinigung Express
        </Link>
        <Link
          className={styles.link}
          color={"foreground"}
          href="/innenreinigung-premium"
          size="lg"
        >
          Innenreinigung Premium
        </Link>
      </AccordionItem>
    </Accordion>
  );
}
