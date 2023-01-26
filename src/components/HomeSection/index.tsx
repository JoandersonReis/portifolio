import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../Button";
import styles from "./styles.module.scss";

type Props = {};

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <main>
        <h1>OLÁ, ME CHAMO JOANDERSON</h1>

        <p>
          Falando um pouco sobre mim, me desafio a superar meus limites todos os
          dias, e gosto muito de tecnologia em geral.
        </p>

        <Button
          title="Saiba mais"
          icon={<FiChevronRight size={22} color="var(--color-background)" />}
        />

        <div className={styles.socialMedia}>
          <Link
            href="https://www.linkedin.com/in/joanderson-reis-566365182/"
            target="_blank"
          >
            <FaLinkedin size={22} color="var(--color-gray)" />
          </Link>

          <Link href="https://github.com/JoandersonReis" target="_blank">
            <FaGithub size={24} color="var(--color-gray)" />
          </Link>
        </div>
      </main>

      <aside>
        <div className={styles.profileContainer}>
          <div className={styles.profile} />
        </div>

        <strong>Desenvolvedor Front-end</strong>
      </aside>
    </section>
  );
};

export default HomeSection;
