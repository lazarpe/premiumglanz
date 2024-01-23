import React from "react";
import style from "./AboutUs.module.css";
import {Map} from "@/components/map_component/map";

export default function AboutUsComponent() {
    return (
        <div>
            <h2>Über uns</h2>
            <p className={style.p}>
                Bei Premiumglanz widmen wir uns mit Fachkenntnissen und langjähriger Erfahrung der
                professionellen Auto-Pflege.
            </p>
            <br/>
            <p className={style.p}> Durch Hingabe an Qualität und Detailtreue bringen wir Ihr Fahrzeug zum Strahlen.</p>
            <br/>
            <br/>
            <h2>Kontakt</h2>
            <p className={style.p}>
                Vielen Dank für Ihren Besuch auf unserer Website. Bei weiteren Fragen oder speziellen Wünschen zu
                unseren Dienstleistungen stehen wir Ihnen gerne zur Verfügung. Wir sind telefonisch und per Formular
                unten erreichbar. Wir freuen uns darauf, Ihnen behilflich zu sein.
            </p>
            <br/>
            <p className={style.p}>
                Termine können bequem über den Button gebucht oder telefonisch vereinbart werden.
            </p>
            <br/>
            <div className={style.gridContainer}>
                <div className={style.gridItem}>
                    <h3>Addresse</h3>
                    <p>Strasse 1234</p>
                    <p>8413 Neftenbach</p>
                    <p>bla@premiumglanz.com</p>
                    <p>+41 76 785 89 15</p>
                </div>
                <div>
                    <h3>Öffnungszeiten</h3>
                    <p>Montag – Freitag </p>
                    <p>08:00 bis 18:00</p>
                    <p className={style.day}>Samstag</p>
                    <p>08:00 bis 18:00</p>
                    <p className={style.day}>Sonntag</p>
                    <p>Geschlossen</p>
                </div>
                <div>
                    <br/>
                    <h3>Unser Standort</h3>
                    <Map />
                </div>
            </div>
        </div>
    );
}