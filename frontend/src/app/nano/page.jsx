import NavbarComponent from "@/components/navbar_component/navbar";
import HeroSection from "@/components/hero_section_component/hero_section";
import nano from "@/assets/img/nanoversiegelung_und_fensterscheiben.jpg";
import style from "@/app/Page.module.css";
import Footer from "@/components/footer_component/footer";
import * as React from "react";

export default function Nano() {
    return (
        <div>
            <NavbarComponent/>
            <HeroSection image={nano} headerOne={"NANOVERSIEGELUNG FENSTER UND SCHEIBEN"}
                         description={""}/>
            <div className={style.content}>
                <h2>Beschreibung</h2>
                <p className={style.p}>
                    Unser exklusiver Service für Nanoversiegelung von Fenstern und Scheiben definiert sich durch
                    Innovation und Qualität. Wir setzen auf modernste Nanotechnologie, um eine unsichtbare Schutzschicht
                    auf Ihre Fenster und Scheiben aufzutragen, die nicht nur für eine kristallklare Sicht sorgt, sondern
                    auch zahlreiche Vorteile bietet.
                </p>
                <p className={style.p}>

                    Die Nanoversiegelung bildet eine ultradünne Schutzbarriere, die Wasser, Schmutz, und andere
                    Verunreinigungen abweist. Dadurch werden Ihre Fenster länger sauber gehalten, was nicht nur die
                    Ästhetik verbessert, sondern auch den Reinigungsaufwand reduziert. Durch die hydrophobe Wirkung
                    perlen Wassertropfen einfach ab, und Schmutz hat deutlich weniger Angriffsfläche.
                </p>
                <p className={style.p}>

                    Diese innovative Technologie trägt nicht nur zur Pflege und Erhaltung Ihrer Fenster bei, sondern
                    erhöht auch die Lebensdauer des Glases. Durch die Verminderung von Verschmutzungen werden
                    gleichzeitig auch Kratzer und Beschädigungen minimiert.
                </p>
                <p className={style.p}>

                    Unser Team von Experten steht für professionelle Anwendung und Beratung. Wir passen unsere
                    Dienstleistungen individuell an Ihre Bedürfnisse an und garantieren eine fachgerechte, langlebige
                    Nanoversiegelung. Vertrauen Sie auf unsere Kompetenz und erleben Sie den Unterschied, wenn Ihre
                    Fenster und Scheiben nicht nur durchsichtig, sondern auch widerstandsfähig gegen äußere Einflüsse
                    sind. Gönnen Sie sich die Leichtigkeit von klaren, geschützten Oberflächen mit unserem erstklassigen
                    Nanoversiegelungsservice für Fenster und Scheiben.
                </p>
                <Footer/>
            </div>
        </div>
    )
}