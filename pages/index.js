import Image from "next/image";

import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";

import { motion } from "framer-motion";

import getIntrodutionData from "../lib/introduction";
import getProjectData from "../lib/projects";

import DisplacementSphere from "../components/DisplacementSphere";
import DecoderText from "../components/DecoderText";
import { GeneralPageLayout } from "../components/layouts";
import Gigs from "../components/groups/gigs";
import Projects from "../components/groups/projects";
import Skills from "../components/groups/skills";
import Typerwriter from "../components/typewriter";

export async function getStaticProps() {
  const introData = await getIntrodutionData();
  const projectsData = await getProjectData();

  return {
    props: {
      introData,
      projectsData,
    },
  };
}

export default function Home({ introData, projectsData }) {
  return (
    <div>
      <DisplacementSphere
        className={styles.introBackground}
        theme={{
          rgbBackground: "248 229 229",
          themeId: "light",
          colorWhite: "#ffffff",
        }}
      />
      <div className={`${utilStyles.fullPage} ${styles.titleSection}`}>
        <div className={utilStyles.centered}>
          <DecoderText className={`${utilStyles.mainHeader} ${styles.title}`} text="SAAKSHAAT SINGH" delay={300} />
          <div className={styles.subtitle}>
            SWE <hr className={utilStyles.lineAfterContent} />
          </div>
          <br />
          <div className={`${styles.typewriter}`}>
            <text
              className={`${utilStyles.accentDark} ${utilStyles.padRightLt}`}
            >
              +
            </text>
            <Typerwriter
              elements={["Leader", "Creator", "Coffee"]}
              cursorColor={"accentDark"}
              speed={20}
            />
          </div>
        </div>
      </div>

      <GeneralPageLayout home={true} title={"Saakshaat | Dev"} socials={true}>
        <div
          className={`${styles.container} ${styles.introSection} ${utilStyles.fullPage}`}
        >
          <div className={utilStyles.sectionHeader}>Who Am I?</div>
          <div className={styles.headerGrid}>
            <div className={`${styles.col} ${styles.introLeft}`}>
              <h3 className={utilStyles.subTitle}>Hi, I'm Saak</h3>
              <motion.div
                drag
                dragConstraints={{
                  top: -5,
                  left: -5,
                  right: 5,
                  bottom: 5,
                }}
                dragMomentum={true}
                dragElastic={0.07}
              >
                <Image
                  className={styles.profilePicture}
                  src="/images/me.png"
                  width={300}
                  height={300}
                  quality={100}
                  priority={true}
                  alt={"Saakshaat Picture"}
                />
              </motion.div>
              <div className={styles.pronounciation}>
                साक्षात \ sa-ahk-SHA-at
              </div>
              <motion.div
                className={styles.introDescription}
                initial={{
                  boxShadow: "1px 1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
                whileHover={{
                  boxShadow: "-1px -1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{
                  boxShadow: "-1px -1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
              >
                I like solving problems. Small problems, like this website. Big
                problems like cloud provisioning. Not too big problems like
                packaging software. Occasionally, I like beewatching, reading to
                my dogs and eating mac n cheese.
              </motion.div>
            </div>
            <div className={`${styles.introRight} ${styles.col}`}>
              <h3 className={utilStyles.subTitle}>What am I doing?</h3>
              <Gigs gigs={introData} />
            </div>
          </div>
        </div>
        <div />
        <div
          className={`${styles.container} ${styles.projectsSection} ${utilStyles.fullPage}`}
        >
          <div className={utilStyles.sectionHeader}>Projects</div>
          <Projects projects={projectsData} />
        </div>
        <div
          className={`${styles.container} ${styles.skillsSection} ${utilStyles.fullPage}`}
        >
          <div className={`${utilStyles.sectionHeader} ${styles.skillsHeader}`}>
            Skills
          </div>
          <div className={styles.headerGrid}>
            <Skills />
          </div>
        </div>
      </GeneralPageLayout>
    </div>
  );
}
