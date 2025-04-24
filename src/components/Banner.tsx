'use client'

import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { Button } from "./Button";
import { useEffect, useState } from "react";

export function Banner() {
  const [text, setText] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const fullText = "Automatize seus atendimentos com";
    let index = 0;

    const typeWriter = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, 70);
      } else {
        setShowLogo(true);
      }
    };

    typeWriter();
  }, []);

  return (
    <main className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div>
        <h2 className={`${styles.typewriter} ${showLogo ? styles.noCursor : ""}`}>{text}</h2>

          <div className={`${styles.logoWrapper} ${showLogo ? styles.visible : ""}`}>
            <Image
              src="/logo.svg"
              alt="Logo Flowz"
              width={320}
              height={100}
              className={styles.logoBanner}
            />
            <Button isMargin={false} />
          </div>
        </div>
      </div>

      <div className={styles.crowLogo}>
        <Image
          src="/minilogo.svg"
          alt="Logo Crow"
          width={30}
          height={30}
        />
      </div>
    </main>
  );
}
