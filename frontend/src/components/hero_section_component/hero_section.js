import React from "react";
import Image from 'next/image'
import heroImage from "../../assets/img/lambo-politur.jpg";
import style from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <div className={style.imgContainer}>
            <Image
                className={style.img}
                alt="NextUI hero Image"
                src={heroImage}
            />
            <div className={style.title}>
                <b style={{fontSize: 60}}>
                    <h1>PREMIUM</h1>
                    <h1 style={{marginTop: -15}}>GLANZ</h1>
                </b>
                <div style={{fontSize: 25, fontWeight: "lighter", marginRight: 20, maxWidth: 500}}>
                    <p>Präzise Pflege und leidenschaftliche Expertise – für den Glanz, den Ihr Auto verdient.</p>
                </div>
            </div>
        </div>
    );
}
