import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import image from "@/assets/img/innenraum_express.jpg";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function InnenreinigungPremium() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection
        image={image}
        headerOne={"Innenreinigung Premium"}
        description={
          "Unser Service bietet eine schnelle und gründliche Reinigung des Fahrzeuginnenraums, ideal für Kunden, die in kurzer Zeit eine Auffrischung wünschen."
        }
      />
      <div className={style.content}>
        <h2>Beschreibung</h2>
        <p className={style.p}>
          Wir bieten bietet eine tiefgehende Reinigung und Pflege des
          Fahrzeuginnenraums. Wir shampoonieren und reinigen die Sitze und
          Teppiche, pflegen alle Oberflächen gründlich und führen eine spezielle
          Lederbehandlung durch. Türverkleidungen und schwer zugängliche
          Bereiche werden intensiv gereinigt, die Lüftungsschlitze desinfiziert
          und Flecken sowie Gerüche beseitigt. Die Fenster werden innen für
          streifenfreie Klarheit poliert. Unser Premium-Service verwandelt den
          Innenraum Ihres Fahrzeugs in einen nahezu neuwertigen Zustand und
          sorgt für ein frisches und sauberes Fahrerlebnis. Vertrauen Sie auf
          unsere Expertise für erstklassige Pflege.
        </p>
        <Footer />
      </div>
    </div>
  );
}
