import styles from "./projects.module.scss";

import {
  ProjectCardCollapsed,
  ProjectCardExpanded,
} from "../cards/projectCards";
import ModalCard from "../cards/modal";

export default function Projects({ projects }) {
  return (
    <div className={styles.container}>
      {projects.map(({ name, link, image, tags, brief, description }) => {
        return (
          <ModalCard>
            {[
              <ProjectCardCollapsed
                name={name}
                image={image}
                tags={tags}
                brief={brief}
              />,
              <ProjectCardExpanded
                name={name}
                image={image}
                tags={tags}
                brief={brief}
                link={link}
                description={description}
              />,
            ]}
          </ModalCard>
        );
      })}
    </div>
  );
}
