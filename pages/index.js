import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.scss";

import { GeneralPageLayout } from "../components/layouts";

export default function Home() {
  return (
    <div>
      <div className={`${utilStyles.fullPage} ${styles.titleSection}`}>
        <h1 className={`${utilStyles.mainHeader} ${utilStyles.centered} ${styles.title}`}>
          Saakshaat Singh
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </div>
      <GeneralPageLayout home={true} title={"Saakshaat"}>
        <main className={styles.container}>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </GeneralPageLayout>
    </div>
  );
}
