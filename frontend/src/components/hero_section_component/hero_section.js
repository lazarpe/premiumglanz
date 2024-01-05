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
        </div>
    );
}
