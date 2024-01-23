import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.left}></div>
            <p className={styles.p}>&copy; 2024 PREMIUMGLANZ</p>
            <div className={styles.right}></div>
        </div>
    );
}