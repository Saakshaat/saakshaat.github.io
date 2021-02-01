import Image from "next/image";
import { motion } from "framer-motion";

import ModalCard from "../cards/modal";

import styles from "./gigs.module.scss";

export default function GigsBlock({ gigs }) {
  return (
    <div className={styles.container}>
      {gigs.map(
        ({ position, organization, logo, description, backgroundColor }) => (
          <ModalCard layoutId={"gigs"}>
            {[
              <div className={styles.compactCard}>
                <Image
                  src={logo}
                  width={150}
                  height={150}
                  alt={`Picture of ${organization}`}
                />
              </div>,
              <div
                className={styles.expandedCard}
                style={{ backgroundColor: backgroundColor }}
              >
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
