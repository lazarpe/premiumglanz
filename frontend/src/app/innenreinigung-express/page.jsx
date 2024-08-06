import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import image from "@/assets/img/innenraum_express.jpg";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function InnenreinigungExpress() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection
        image={image}
        headerOne={"Innenreinigung Express"}
        description={
          "Unser Service bietet eine schnelle und gründliche Reinigung des Fahrzeuginnenraums, ideal für Kunden, die in kurzer Zeit eine Auffrischung wünschen."
        }
      />
      <div className={style.content}>
        <h2>Beschreibung</h2>
        <p className={style.p}>
          Beim Express-Service konzentrieren wir uns auf die wichtigsten
          Bereiche des Innenraums. Wir saugen die Sitze, Teppiche und Fußmatten
          gründlich, reinigen die Armaturen und Oberflächen, entfernen Müll und
          sichtbaren Schmutz und führen eine Schnellreinigung der Fenster innen
          durch. Dieser Service ist perfekt für eine schnelle, aber effektive
          Auffrischung des Fahrzeuginnenraums, wenn die Zeit knapp ist.
        </p>
        <Footer />
      </div>
    </div>
  );
}
