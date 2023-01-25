import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joanderson - Portifólio</title>
        <meta name="description" content="Desenvolvedor Front-end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={styles.content}>
        <Header />
      </section>
    </div>
  );
}
