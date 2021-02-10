import styles from "./projects.module.scss";

import ModalCard from "../cards/modal";

export default function Projects({ projects }) {
  return (
    <div className={styles.container}>
      {projects.map(({ name, link, image, tags, brief, description }) => {
        return (
          <ModalCard>
            {[
              <div>
                {name} @ {brief}
                {tags.map((tag) => tag)}
              </div>,
              <div>
                  { name, link, image, tags, brief, description }
              </div>
            ]}
          </ModalCard>
        );
      })}
    </div>
  );
}
