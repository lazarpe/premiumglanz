import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import politurImage from "@/assets/img/politur.png";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function Politur() {
    return (
        <div>
            <NavbarComponent/>
            <HeroSection image={politurImage} headerOne={"POLITUR UND"} headerTwo={"LACKVERSIEGELUNG"}
                         description={""}/>
            <div className={style.content}>
                <h2>Beschreibung</h2>
                <p className={style.p}>
                    Unsere Auto-Politur und Lackversiegel-ung bieten Ihrem Fahrzeug nicht nur einen beeindruckenden
                    Glanz,
                    sondern auch einen nachhaltigen Schutz vor den Herausforderungen des Strassenver-kehrs und der
                    Umwelt.

                    Unser professionelles Team von Auto-aufbereitungs-Experten setzt modern-ste Techniken und
                    hochwertige
                    Pro-dukte ein, um Ihrem Fahrzeug den bes-ten Service zu bieten.
                </p>
                <Footer/>
            </div>
        </div>
    )
}