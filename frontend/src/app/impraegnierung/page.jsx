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
          Bla
        </p>
        <Footer />
      </div>
    </div>
  );
}
