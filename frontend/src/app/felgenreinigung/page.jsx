import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import image from "@/assets/img/felgen.jpg";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function Felgenreinigung() {
  return (
    <div>
      <NavbarComponent />
      <HeroSection
        image={image}
        headerOne={"Felgenreinigung"}
        description={""}
      />
      <div className={style.content}>
        <h2>Beschreibung</h2>
        <p className={style.p}>
          Wir sorgen dafür, dass Ihre Felgen wieder in neuem Glanz erstrahlen.
          Wir verwenden spezialisierte Reinigungsmittel und Werkzeuge, um
          hartnäckigen Bremsstaub, Strassenschmutz und Teerflecken gründlich zu
          entfernen. Dabei achten wir auf eine schonende Behandlung, um Kratzer
          und Beschädigungen zu vermeiden. Nach der Reinigung werden die Felgen
          poliert und versiegelt, um sie vor zukünftigen Verschmutzungen zu
          schützen. Mit unserer professionellen Felgenreinigung verleihen wir
          Ihrem Fahrzeug nicht nur ein gepflegtes Aussehen, sondern tragen auch
          zur Werterhaltung bei. Vertrauen Sie auf unsere Expertise für
          makellose Felgen und ein rundum gepflegtes Fahrzeug.
        </p>
        <Footer />
      </div>
    </div>
  );
}
