import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Benefits />
      <Testimonials />
      <Cta />
    </>
  );
}
