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
                  scale: 1,
                }}
                whileTap={{
                  scale: ["1.3", "1.5", "1.8", "2"],
                  // rotate: ["90%", "180%", "270%", "260%"]
                }}
                transition={{
                  duration: 3,
                }}
              >
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt={`Picture of ${organization}`}
                />
              </motion.div>,
              <motion.div
                className={styles.expandedCard}
                intial={{
                  display: "none",
                  backgroundColor: "inherit",
                }}
                animate={{
                  backgroundColor: backgroundColor,
                  display: "block",
                  color: color,
                }}
                transition={{
                  delay: 2,
                  type: "spring",
                  ease: "easeInOut",
                }}
              >
                {organization} @ {position}
                <br />
                {description}
              </motion.div>,
            ]}
          </ModalCard>
        )
      )}
    </div>
  );
}
