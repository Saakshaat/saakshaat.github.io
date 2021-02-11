import styles from "./projects.module.scss";
import themeColors from "../../styles/_variables/colors.module.scss";

import { motion } from "framer-motion";

import SkillChip from "../skillChip";
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
                  boxShadow: "none",
                }}
                whileHover={{
                  backgroundSize: "120%",
                  boxShadow: `-0.5px 0.5px 5px 0.5px rgba(248, 229, 229, 0.4)`,
                }}
                whileTap={{
                  backgroundSize: "120%",
                  // boxShadow: "-0.5px 0.5px 5px 0.5px rgba(200, 200, 200, 0.5)",
                }}
                transition={{
                  duration: "0.2",
                }}
              >
                <div className={styles.collapsedText}>
                  <div className={styles.collapsedName}>{name}</div>
                  <div className={styles.collapsedBrief}>{brief}</div>
                  <div className={styles.tags}>
                    {tags.map((tag) => (
                      <SkillChip skill={tag} size={5} />
                    ))}
                  </div>
                </div>
              </motion.div>,
              <div>
                {name} @ {brief}
                <br />
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <SkillChip skill={tag} size={5} />
                  ))}
                </div>
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
