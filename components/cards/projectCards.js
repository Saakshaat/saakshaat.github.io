import styles from "./projectCards.module.scss";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SkillChip from "../skillChip";

export function ProjectCardCollapsed({ name, image, tags, brief }) {
  const variants = {
    hidden: {
      x: `-4rem`,
      rotate: 20,
      opacity: 0,
      backgroundSize: "100%",
      boxShadow: "-0.5px 0.5px 5px 0.5px rgb(0, 0, 0)",
    },
    visible: {
      x: 0,
      rotate: [10, 20, 10, 0],
      opacity: ["0.2", "0.4", "0.8", "1"],
      backgroundSize: "100%",
      boxShadow: "-0.5px 0.5px 5px 0.5px rgb(0, 0, 0)",
      transition: {
        duration: "0.4",
      },
      staggerChildren: {
        transition: "0",
      },
    },
  };

  const [seen, setSeen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !seen) {
      setSeen(true);
      controls.start("visible");
    }
    if (!inView && !seen) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={variants.hidden}
      animate={controls}
      variants={variants}
      className={styles.collapsedCard}
      style={{
        backgroundImage: `url(${image})`,
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
    </motion.div>
  );
}

export function ProjectCardExpanded({
  name,
  link,
  image,
  tags,
  brief,
  description,
}) {
  return (
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
        type: "spring",
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
    </motion.div>
  );
}
