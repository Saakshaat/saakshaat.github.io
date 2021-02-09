import Image from "next/image";
import { motion } from "framer-motion";

import ModalCard from "../cards/modal";

import styles from "./gigs.module.scss";

export default function GigsBlock({ gigs }) {
  return (
    <div className={styles.container}>
      {gigs.map(
        ({
          position,
          organization,
          logo,
          description,
          color,
          backgroundColor,
        }) => (
          <ModalCard layoutId={"gigs"}>
            {[
              <motion.div
                className={styles.compactCard}
                initial={{
                  x: 0,
                  scale: 1,
                  rotation: 0,
                }}
                whileTap={{
                  scale: 1.5,
                }}
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  duration: "0.7",
                  type: "intertia",
                }}
              >
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt={`Picture of ${organization}`}
                />
              </motion.div>,
              <div>
                <motion.div
                  className={styles.expandedCard}
                  intial={{
                    scale: "0.2",
                  }}
                  animate={{
                    // color: `${color}`,
                    // backgroundColor: `${backgroundColor}`,
                    scale: ["0.4", "0.6", "0.8", "1.0"],
                  }}
                  transition={{
                    duration: "0.1",
                    type: "keyframes",
                  }}
                >
                  <div className={styles.headerGrid}>
                    <div
                      className={`${styles.cardLogo} ${styles.thirdGrid} ${styles.col}`}
                    >
                      <Image
                        src={logo}
                        width={80}
                        height={80}
                        alt={organization}
                      />
                    </div>
                    <div className={`${styles.titles} ${styles.col}`}>
                      <div className={styles.organization}>{organization}</div>
                      <div className={styles.position}>{position}</div>
                    </div>
                  </div>
                  <div className={styles.description}>{description}</div>
                </motion.div>
              </div>,
            ]}
          </ModalCard>
        )
      )}
    </div>
  );
}
