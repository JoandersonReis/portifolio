import Head from "next/head";

import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import { useState } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [sectionSelected, setSectionSelected] = useState("home");
  const [ themeSelected, setThemeSelected ] = useState("dark")

  return (
    <div className={`${styles.container} ${themeSelected == "white" && styles.whiteTheme}`}>
      <Head>
        <title>Joanderson - Portifólio</title>
        <meta name="description" content="Desenvolvedor Front-end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={styles.content}>
        <Header
          onSectionSelected={setSectionSelected}
          sectionSelected={sectionSelected}
          onThemeSelected={setThemeSelected}
          themeSelected={themeSelected}
        />

        <main className={styles.sections}>
          {sectionSelected == "home" && <HomeSection />}
          {sectionSelected == "projects" && <ProjectsSection />}
          {sectionSelected == "skills" && <SkillsSection />}
          {sectionSelected == "about" && <AboutSection />}
        </main>
      </section>
    </div>
  );
}
