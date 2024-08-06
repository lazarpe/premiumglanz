import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import image from "@/assets/img/cabrio.jpg";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function Impraegnierung() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection
        image={image}
        headerOne={"Imprägnierung und Reinigung Cabrio-dach"}
        description={""}
      />
      <div className={style.content}>
        <h2>Beschreibung</h2>
        <p className={style.p}>
          Unser Service "Imprägnierung und Reinigung Cabrio-Dach" bietet eine
          umfassende Pflege und Schutz für Ihr Cabrio. Wir reinigen gründlich
          das Dachmaterial, entfernen Schmutz, Algen und Flecken, die sich im
          Laufe der Zeit angesammelt haben. Anschliessend wird eine hochwertige
          Imprägnierung aufgetragen, die das Dach effektiv vor
          Witterungseinflüssen und UV-Strahlen schützt. Diese Behandlung
          verlängert die Lebensdauer des Dachs, bewahrt seine Farbe und sorgt
          dafür, dass es auch bei Regen wasserabweisend bleibt. Vertrauen Sie
          auf unsere Expertise, um Ihr Cabrio in bestem Zustand zu halten und
          den Fahrspass zu maximieren.
        </p>
        <Footer />
      </div>
    </div>
  );
}
