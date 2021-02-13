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
  "JS",
  "AWS",
  "TYPESCRIPT",
  "REACT",
  "YAML",
  "TERRAFORM",
  "FIREBASE",
  "LEX",
  "KUBERNETES",
  "YACC",
  "DOCKER",
];

export default function Skills() {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        // <div className={styles.chip}>
          <SkillChip skill={skill} size={9} />
        // </div>
      ))}
    </div>
  );
}
