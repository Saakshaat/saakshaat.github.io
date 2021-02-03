import Image from "next/image";

import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";

import { motion } from "framer-motion";

import getIntrodutionData from "../lib/introduction";

import { GeneralPageLayout } from "../components/layouts";
import Gigs from "../components/groups/gigs";
import Typerwriter from "../components/typewriter";

export async function getStaticProps() {
  const introData = await getIntrodutionData();

  return {
    props: {
      introData,
    },
  };
}

export default function Home({ introData }) {
  return (
    <div>
      <div className={`${utilStyles.fullPage} ${styles.titleSection}`}>
        <div className={utilStyles.centered}>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, type: "intertia" }}
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
        <div className={`${styles.container} ${utilStyles.fullPage}`}>
          <h2 className={utilStyles.sectionHeader}>Who Am I?</h2>
          <div className={styles.headerGrid}>
            <div className={`${styles.col} ${styles.introLeft}`}>
              <h3 className={utilStyles.subTitle}>Hi, I'm Saak</h3>
              <Image
                className={styles.profilePicture}
                src="/images/me.jpg"
                width={300}
                height={300}
                quality={100}
                priority={true}
                alt={"Saakshaat Picture"}
              />
              <div className={styles.pronounciation}>
                साक्षात \ sa-ahk-SHA-at
              </div>
              <div className={styles.introDescription}>
                I like solving problems. Small problems, like this website. Big
                problems like cloud provisioning. Not too big problems like
                packaging software. Occasionally, I like beewatching, reading to
                my dogs and eating mac n cheese.
              </div>
            </div>
            <div className={`${styles.introRight} ${styles.col}`}>
              <h3 className={utilStyles.subTitle}>What am I doing?</h3>
              <Gigs gigs={introData} />
            </div>
          </div>
        </div>
        <div />
      </GeneralPageLayout>
    </div>
  );
}
