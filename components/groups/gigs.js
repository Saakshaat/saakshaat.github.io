import { useState } from "react";
import Image from "next/image";

import ModalCard from "../cards/modal";

import styles from "./gigs.module.scss";

export default function GigsBlock({ gigs }) {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className={styles.container}>
      {gigs.map(
        ({ position, organization, logo, description, backgroundColor }) => (
          <ModalCard isOpened={isOpened} setOpened={setOpened} key={logo}>
            {[
              <div className={styles.compactCard}>
                <Image
                  onClick={() => setOpened(true)}
                  src={logo}
                  width={150}
                  height={150}
                  alt={`Picture of ${organization}`}
                />
              </div>,
              <div className={styles.expandedCard}>
                {organization} @ {position}
                <br />
                {description}
              </div>,
            ]}
          </ModalCard>
        )
      )}
    </div>
  );
}
