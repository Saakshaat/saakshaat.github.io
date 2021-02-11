import styles from "./projects.module.scss";

import { motion } from "framer-motion";

import ModalCard from "../cards/modal";

export default function Projects({ projects }) {
  return (
    <div className={styles.container}>
      {projects.map(({ name, link, image, tags, brief, description }) => {
        return (
          <ModalCard>
            {[
              <motion.div
                className={styles.collapsedCard}
                style={{
                  backgroundImage: `url(${image})`,
                }}
                initial={{
                  backgroundSize: "100%",
                }}
                whileHover={{
                  backgroundSize: "120%",
                }}
                whileTap={{
                  backgroundSize: "120%",
                }}
                transition={{
                  duration: "0.2",
                }}
              >
                <div className={styles.collapsedText}>
                  <div className={styles.collapsedName}>{name}</div>
                  <div className={styles.collapsedBrief}>{brief}</div>
                  {tags.map((tag) => tag + " ")}
                </div>
              </motion.div>,
              <div>
                {name} @ {brief}
                <br />
                {tags.map((tag) => tag + " ")}
                <br />
                <br />
                {description}
              </div>,
            ]}
          </ModalCard>
        );
      })}
    </div>
  );
}
