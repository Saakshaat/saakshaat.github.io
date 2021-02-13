import SkillChip from "../skillChip";

import styles from "./skills.module.scss";

const skills = [
  "PYTHON",
  "C",
  "RUST",
  "CPP",
  "NOSQL",
  "SQL",
  "RUBY",
  "JAVA",
  "NODE",
  "NEXT",
  "BASH",
  "RAILS",
  "AWS",
  "REACT",
  "JS",
  "TYPESCRIPT",
  "YAML",
  "TERRAFORM",
  "YACC",
  "FIREBASE",
  "DOCKER",
  "KUBERNETES",
  "LEX",
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
