import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.scss";

import { motion } from "framer-motion";

import Typerwriter from "../components/typewriter";

import { GeneralPageLayout } from "../components/layouts";

export default function Home() {
  return (
    <div>
      <div className={`${utilStyles.fullPage} ${styles.titleSection}`}>
        <div className={utilStyles.centered}>
          <motion.h1
            initial={{
              y: "8rem",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.4, type: "intertia" }}
          >
            <h1 className={`${utilStyles.mainHeader} ${styles.title}`}>
              <text className={utilStyles.highlightWhite}>Saakshaat</text>{" "}
              <text className={utilStyles.white}>Singh</text>
            </h1>
          </motion.h1>

          <div className={`${styles.typewriter} ${utilStyles.padTopMd}`}>
            <Typerwriter
              elements={["SWE", "Leader", "Visionary"]}
              cursorColor={"white"}
            />
          </div>
        </div>
      </div>
      <GeneralPageLayout home={true} title={"Saakshaat"} socials={true}>
        <main className={`${styles.container} ${utilStyles.fullPage}`}>
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
        <div/>
      </GeneralPageLayout>
    </div>
  );
}
