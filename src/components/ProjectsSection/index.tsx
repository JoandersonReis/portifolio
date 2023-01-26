import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";

type Props = {};

const ProjectsSection = () => {
  const projects = [
    {
      imageName: "seo-analytics.svg",
      link: "https://agenciaseoanalytics.com",
    },
    {
      imageName: "viraliza.svg",
      link: "https://viraliza.net",
    },
    {
      imageName: "upgram.svg",
      link: "https://upgram.site",
    },
    {
      imageName: "seguidoresbrasil.svg",
      link: "https://seguidoresbrasil.io",
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <strong>Projetos</strong>
      <h1>PROJETOS QUE ACHO VÁLIDO DESTACAR</h1>

      <main>
        {projects.map((item) => (
          <div
            className={styles.project}
            key={item.link}
            style={{
              "backgroundImage": `url(/assets/images/${item.imageName})`,
            }}
          >
            <div className={styles.backgroundOpacity}>
              <Link href={item.link} target="_blank">
                VER MAIS
              </Link>
            </div>
          </div>
        ))}
      </main>

      <Link href="https://github.com/JoandersonReis">
        Meu github <FaGithub color="var(--color-background)" />
      </Link>
    </section>
  );
};

export default ProjectsSection;
