import Image from "next/image";

import styles from "./skillChip.module.scss";

const skills = {
  Python: {
    color: "#4b8bbe",
    backgroundColor: "#FFD43B",
    image: "/images/logos/skills/python.png",
  },
  CLI: {
    color: "#000000",
    backgroundColor: "#39FF14",
    image: "/images/logos/skills/cli.png",
  },
  PyPI: {
    color: "#FFE873",
    backgroundColor: "#4b8bbe",
    image: "/images/logos/skills/pypi.png",
  },
  JavaScript: {
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
  Rust: {
    color: "#281C1C",
    backgroundColor: "#CE412B",
    image: "/images/logos/skills/rust.png",
  },
  Ruby: {
    color: "#FFFFFF",
    backgroundColor: "#EDA895",
    image: "/images/logos/skills/ruby.png",
  },
  Next: {
    color: "#FFFFFF",
    backgroundColor: "#080808",
    image: "/images/logos/skills/next.png",
  },
  React: {
    color: "#080808",
    backgroundColor: "#61DBFB",
    image: "/images/logos/skills/react.png",
  },
  Firebase: {
    color: "#FFCA28",
    backgroundColor: "#039BE5",
    image: "/images/logos/skills/firebase.png",
  },
  Node: {
    color: "#68A063",
    backgroundColor: "#303030",
    image: "/images/logos/skills/node.png",
  },
  Docker: {
    color: "#0db7ed",
    backgroundColor: "#384d54",
    image: "/images/logos/skills/docker.png",
  },
};

export default function SkillChip({ skill, size }) {
  return (
    <div
      className={styles.chip}
      style={{
        color: `${skills[skill].color}`,
        backgroundColor: `${skills[skill].backgroundColor}`,
      }}
    >
      <div style={{ fontSize: `${Number(size / 4)}rem` }}>
        {skill}{" "}
        {
          <Image
            className={styles.logo}
            src={skills[skill].image}
            width={size * 3}
            height={size * 3}
          />
        }
      </div>
    </div>
  );
}
