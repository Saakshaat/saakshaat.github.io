import SkillChip from "../skillChip";

import styles from "./skills.module.scss";

const skills = [
  "PYTHON",
  "C",
  "RUST",
  "LOOPBACK",
  "JS",
  "TS",
  "DOCKER",
  "AWS",
  "JENKINS",
  "JAVA",
  "GIT",
  "REACT",
  "FASTAPI",
  "CPP",
  "TERRAFORM",
  "RUBY",
  "NODE",
  "FIREBASE",
  "KUBERNETES",
  "NEXT",
  "HCL",
  "BASH",
  "RAILS",
  "YACC",
  "SQL",
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
