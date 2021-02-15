import Image from "next/image";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./skillChip.module.scss";

const skills = {
  PYTHON: {
    color: "#4b8bbe",
    backgroundColor: "#FFD43B",
    image: "/images/logos/skills/python.png",
  },
  CLI: {
    color: "#000000",
    backgroundColor: "#39FF14",
    image: "/images/logos/skills/cli.png",
  },
  PYPI: {
    color: "#FFE873",
    backgroundColor: "#4b8bbe",
    image: "/images/logos/skills/pypi.png",
  },
  JS: {
    color: "#f0db4f",
    backgroundColor: "#323330",
    image: "/images/logos/skills/js.png",
  },
  HTML: {
    color: "#f06529",
    backgroundColor: "#ebebeb",
    image: "/images/logos/skills/html.png",
  },
  CSS: {
    color: "#ffffff",
    backgroundColor: "#2965f1",
    image: "/images/logos/skills/css.png",
  },
  C: {
    color: "#ffffff",
    backgroundColor: "#3949AB",
    image: "/images/logos/skills/c.png",
  },
  CPP: {
    color: "#274773",
    backgroundColor: "rgb(206, 204, 204)",
    image: "/images/logos/skills/cpp.png",
  },
  RUST: {
    color: "#281C1C",
    backgroundColor: "#CE412B",
    image: "/images/logos/skills/rust.png",
  },
  TYPESCRIPT: {
    color: "#007acc",
    backgroundColor: "#ffffff",
    image: "/images/logos/skills/ts.png",
  },
  RUBY: {
    color: "#820C02",
    backgroundColor: "#EDA895",
    image: "/images/logos/skills/ruby.png",
  },
  RAILS: {
    color: "#820C02",
    backgroundColor: "#EDA895",
    image: "/images/logos/skills/rails.png",
  },
  JAVA: {
    color: "#007396",
    backgroundColor: "#be740c",
    image: "/images/logos/skills/java.png",
  },
  SQL: {
    color: "#3a3939",
    backgroundColor: "#387db6",
    image: "/images/logos/skills/sql.png",
  },
  NOSQL: {
    color: "white",
    backgroundColor: "black",
    image: "/images/logos/skills/nosql.png",
  },
  TERRAFORM: {
    color: "rgb(98,60,228)",
    backgroundColor: "rgb(206,206,206)",
    image: "/images/logos/skills/terraform.png",
  },
  YAML: {
    color: "#000000",
    backgroundColor: "#bd3e1e",
    image: "/images/logos/skills/yaml.png",
  },
  LEX: {
    color: "white",
    backgroundColor: "gray",
    image: "/images/logos/skills/c.png",
  },
  YACC: {
    color: "white",
    backgroundColor: "gray",
    image: "/images/logos/skills/c.png",
  },
  BASH: {
    color: "#29977e",
    backgroundColor: "#540D6E",
    image: "/images/logos/skills/bash.png",
  },
  NEXT: {
    color: "#FFFFFF",
    backgroundColor: "#080808",
    image: "/images/logos/skills/next.png",
  },
  KUBERNETES: {
    color: "#FFFFFF",
    backgroundColor: "#326ce5",
    image: "/images/logos/skills/kubernetes.png",
  },
  REACT: {
    color: "#080808",
    backgroundColor: "#61DBFB",
    image: "/images/logos/skills/react.png",
  },
  FIREBASE: {
    color: "#FFCA28",
    backgroundColor: "#039BE5",
    image: "/images/logos/skills/firebase.png",
  },
  NODE: {
    color: "#68A063",
    backgroundColor: "#303030",
    image: "/images/logos/skills/node.png",
  },
  DOCKER: {
    color: "#0db7ed",
    backgroundColor: "#384d54",
    image: "/images/logos/skills/docker.png",
  },
  AWS: {
    color: "#FF9900",
    backgroundColor: "#232F3E",
    image: "/images/logos/skills/aws.png",
  },
  HCL: {
    color: "black",
    backgroundColor: "white",
    image: "/images/logos/skills/hashicorp.png",
  },
  FASTAPI: {
    color: "#21998A",
    backgroundColor: "#F7F7F7",
    image: "/images/logos/skills/fastapi.png",
  },
  GIT: {
    color: "#d4b09a",
    backgroundColor: "#211F1F",
    image: "/images/logos/skills/git.png",
  },
};

const sizes = {
  small: {
    margin: "0.2rem",
    border: "1.5px solid",
    fontSize: "0.8rem",
    contentLeftRightPadding: "0.5rem",
    contentPadding: "0.2rem",
    textPadding: "0.15rem",
    imgSize: "12",
    imgPadding: "0.1rem",
    imgMarginTop: "0.3rem",
  },
  large: {
    margin: "0.5rem",
    border: "4.5px solid",
    fontSize: "2rem",
    contentLeftRightPadding: "0.65rem",
    contentPadding: "0.45rem",
    textPadding: "0.30rem",
    imgSize: "25",
    imgPadding: "0.5rem",
    imgMarginTop: "0.6rem",
  },
};

export default function SkillChip({ skill, size }) {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: "-2",
      opacity: 0,
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
      initial="hidden"
      animate={controls}
      variants={variants}
      className={styles.chip}
      transition={{
        duration: "0.3",
        type: "keyframes",
      }}
      style={{
        color: `${skills[skill].color}`,
        backgroundColor: `${skills[skill].backgroundColor}`,
        margin: sizes[size].margin,
        border: sizes[size].border,
      }}
    >
      <div
        className={styles.content}
        style={{
          padding: sizes[size].contentPadding,
          paddingLeft: sizes[size].contentLeftRightPadding,
          paddingRight: sizes[size].contentLeftRightPadding,
        }}
      >
        <text
          style={{
            fontSize: sizes[size].fontSize,
            fontFamily: "Heebo, Helvetica, Arial",
            paddingLeft: sizes[size].textPadding,
          }}
        >
          {skill}{" "}
        </text>
        {
          <div
            className={styles.logo}
            style={{
              marginTop: sizes[size].imgMarginTop,
              paddingRight: sizes[size].imgPadding,
            }}
          >
            <Image
              src={skills[skill].image}
              width={sizes[size].imgSize}
              height={sizes[size].imgSize}
            />
          </div>
        }
      </div>
    </motion.div>
  );
}
