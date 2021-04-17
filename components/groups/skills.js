import SkillChip from "../skillChip";

import styles from "./skills.module.scss";

const skills = [
  "PYTHON",
  "C",
  "RUST",
  "LOOPBACK",
  "JS",
  "TS",
  "CPP",
  "NOSQL",
  "SQL",
  "RUBY",
  "JAVA",
  "NODE",
  "NEXT",
  "BASH",
  "RAILS",
  "TERRAFORM",
  "YACC",
  "REACT",
  "FIREBASE",
  "AWS",
  "FASTAPI",
  "GIT",
  "DOCKER",
  "HCL",
  "YAML",
  "KUBERNETES",
];

export default function Skills() {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        // <div className={styles.chip}>
        <SkillChip skill={skill} size={"large"} />
        // </div>
      ))}
    </div>
  );
}
