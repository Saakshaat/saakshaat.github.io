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
                  boxShadow: "-0.5px 0.5px 5px 0.5px rgb(0, 0, 0)",
                }}
                whileHover={{
                  backgroundSize: "120%",
                  boxShadow: `0px 0px 8px 3px rgb(0, 0, 0)`,
                }}
                whileTap={{
                  backgroundSize: "120%",
                  boxShadow: `0px 0px 8px 3px rgb(0, 0, 0)`,
                }}
                transition={{
                  duration: "0.2",
                }}
              >
                <div className={styles.collapsedText}>
                  <div className={styles.collapsedName}>{name}</div>
                  <div className={styles.collapsedBrief}>{brief}</div>
                  <div className={styles.collapsedTagsWrapper}>
                    <div className={styles.tags}>
                      {tags.map((tag) => (
                        <SkillChip skill={tag} size={"small"} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>,
              <motion.div
                className={styles.expandedCard}
                initial={{
                  boxShadow: "none",
                }}
                animate={{
                  boxShadow: "0px 0px 100rem 100rem rgba(0, 0, 0, 0.8)",
                }}
                transition={{
                  duration: "0",
                }}
              >
                <div className={styles.expandedName}>{name}</div>
                <div className={styles.expandedBrief}>{brief}</div>
                <div className={styles.exapandedTags}>
                  <div className={styles.tags}>
                    {tags.map((tag) => (
                      <SkillChip skill={tag} size={"small"} />
                    ))}
                  </div>
                </div>
                <div className={styles.expandedDescription}>{description}</div>
                {link ? (
                  <div className={styles.expandedLink}>
                    <a href={link} target={"blank"}>
                      Visit &#128279;
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </motion.div>,
            ]}
          </ModalCard>
        );
      })}
    </div>
  );
}
