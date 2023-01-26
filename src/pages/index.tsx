import Head from "next/head";

import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import { useState } from "react";

export default function Home() {
  const [sectionSelected, setSectionSelected] = useState("home");

  return (
    <div className={styles.container}>
      <Head>
        <title>Joanderson - Portifólio</title>
        <meta name="description" content="Desenvolvedor Front-end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={styles.content}>
        <Header
          onSectionSelected={setSectionSelected}
          sectionSelected={sectionSelected}
        />

        <main className={styles.sections}>
          <HomeSection />
        </main>
      </section>
    </div>
  );
}
