import React from "react";
import {Card, CardBody} from "@nextui-org/react";
import Image from 'next/image'
import style from "./Card.module.css";

export default function CardComponent(props) {
    return (
        <Card className={style.card}>
            <CardBody>
                <Image
                    fill
                    className={style.img}
                    alt="NextUI hero Image"
                    src={props.imagePath}
                />
                <div className={style.details}>
                    <p>{props.title}</p>
                    <br/>
                    <p style={{fontWeight: "bold"}}>{props.price} CHF</p>
                </div>
            </CardBody>
        </Card>
    );
}
