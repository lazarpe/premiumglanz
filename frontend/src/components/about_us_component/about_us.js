import React from "react";
import style from "./AboutUs.module.css";

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
        </div>
    )
        ;
}