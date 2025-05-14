'use client'

import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { Button } from "./Button";
import { useEffect, useState } from "react";

export function Banner() {
  const [showText, setShowText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Primeiro mostra o texto
    const textTimeout = setTimeout(() => setShowText(true), 200);
    // Depois mostra o logo e botão
    const logoTimeout = setTimeout(() => setShowLogo(true), 1400);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(logoTimeout);
    };
  }, []);

  return (
    <main className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div>
          <h2 className={`${styles.fadeInText} ${showText ? styles.visible : ""}`}>
            Automatize seus atendimentos com
          </h2>

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
