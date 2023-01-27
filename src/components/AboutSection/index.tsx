import Image from 'next/image'
import styles from './styles.module.scss'

type Props = {}

import whatsappIcon from "../../../public/assets/icons/yellow_whatsapp.svg"
import telegramIcon from "../../../public/assets/icons/yellow_telegram.svg"
import gmailIcon from "../../../public/assets/icons/yellow_gmail.svg"
import Link from 'next/link'
import { FaEnvelope, FaEnvelopeSquare, FaGithub, FaLinkedin, FaMailBulk, FaTelegram, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <main>
        <p>
          Meu nome é Joanderson, tenho 22 anos e sou desenvolvedor front-end há mais de 1 ano.  Atuo utilizando React, Typescript, Node.js e React Native.
        </p>

        <p>
          Busco me desenvolver profissionalmente e pessoalmente, sou uma pessoa calma, paciente e muito amigável. Tenho muita vontade de aprender e me destaco principalmente pela flexibilidade a diversas situações.
        </p>
      </main>

      <aside>
        <strong>Contato</strong>
        <h1>Gostou do meu trabalho? me chame para tomar um café</h1>

        <div className={styles.contacts}>
          <span>
            <FaWhatsappSquare size={32} color="var(--color-primary)" />

            <Link href="https://wa.me/5574999269460" target="_blank">74 9 9926-9460</Link>
          </span>

          <span>
            <FaTelegram size={32} color="var(--color-primary)" />

            <Link href="https://web.telegram.org/k/#@Joanderson2000" target="_blank">74 9 9926-9460</Link>
          </span>

          <span>
          <FaEnvelopeSquare size={32} color="var(--color-primary)" />

            <span>joandersonreis470@gmail.com</span>
          </span>
        </div>

        <h2>Faça conexões comigo</h2>
        <div className={styles.socialMedia}>
          <Link href="https://github.com/JoandersonReis" target="_blank">
            <FaGithub size={32} color="var(--color-primary)" />
          </Link>

          <Link href="https://www.linkedin.com/in/joanderson-reis-566365182/" target="_blank">
            <FaLinkedin size={32} color="var(--color-primary)" />
          </Link>
        </div>
      </aside>
    </section>
  )
}

export default AboutSection
