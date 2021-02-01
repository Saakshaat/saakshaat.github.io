import styles from "../styles/Home.module.css";
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
          {/* profile picturerep */}
          <h3 className={utilStyles.subTitle}>What am I doing?</h3>
          <Gigs gigs={introData} />
        </div>
        <div />
      </GeneralPageLayout>
    </div>
  );
}
