'use client'

import { useState } from "react";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.",
    social: ["instagram", "linkedin"],
  },
  {
    id: 2,
    text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.",
    social: ["instagram", "linkedin"],
  },
  {
    id: 3,
    text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.",
    social: ["instagram", "linkedin"],
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.slider}>
        {testimonials.map((item, index) => {
          let className = styles.card;
          if (index === currentIndex) className += ` ${styles.active}`;
          else if (
            index === (currentIndex + 1) % testimonials.length ||
            (currentIndex === testimonials.length - 1 && index === 0)
          )
            className += ` ${styles.side}`;

          return (
            <div key={item.id} className={className}>
              <div className={styles.circle} />
              <p>{item.text}</p>
              <div className={styles.socials}>
                {item.social.includes("instagram") && <Link href={''} target="blank"><Image src={'./instagram.svg'} alt="" width={25} height={25}/></Link>}
                {item.social.includes("linkedin") && <Link href={''} target="blank"><Image src={'./linkedin.svg'} alt="" width={25} height={25}/></Link> }
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </section>
  );
}
