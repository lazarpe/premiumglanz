import React from "react";
import Image from 'next/image'
import style from "./HeroSection.module.css";

export default function HeroSection(props) {
    return (
        <div className={style.imgContainer}>
            <Image
                className={style.img}
                alt="NextUI hero Image"
                src={props.image}
            />
            <div className={style.title}>
                <div style={{fontWeight: "bold", fontSize: 60, marginRight: 20, maxWidth: 500}}>
                    <h1>{props.headerOne}</h1>
                    <h1 style={{marginTop: -15}}>{props.headerTwo}</h1>
                </div>
                <div style={{fontSize: 25, fontWeight: "lighter", marginRight: 20, maxWidth: 500}}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
