import styles from "./footer.module.scss";
import utilStyles from "../styles/utils.module.scss";

import Typerwriter from "./typewriter";

import { AnimatedSocialIcon } from "react-animated-social-icons";

export default function Footer() {
  return (
    <div className={`${styles.container} ${utilStyles.padTopMd}`}>
      <text className={`${styles.title} ${utilStyles.subTitle} ${utilStyles.highlightWhite}`}>Say Hi?</text>
      <div className={`${utilStyles.subTitle} ${utilStyles.accentLight}`}>__</div>
      <footer
        className={`${styles.socialsFooter} ${utilStyles.padTopMd} ${utilStyles.quarterPage}`}
      >
        <AnimatedSocialIcon
          brandName="github"
          url="https://github.com/saakshaat"
          animation="grow"
          defaultColor="#f8f8f8"
          hoverColor="#c39ea0"
          width="3em"
          animationDuration={0.2}
          style={{ padding: "3em" }}
        />
        <AnimatedSocialIcon
          brandName="linkedin"
          url="https://linkedin.com/in/saakshaat"
          animation="grow"
          defaultColor="#0e76a8"
          hoverColor="#c39ea0"
          width="3em"
          animationDuration={0.2}
          style={{ padding: "3em" }}
        />
        <br />
        <br />
        <br />
        <div className={styles.typewriter}>
          <Typerwriter
            elements={[
              "Waffles over pancakes",
              "I'm trilingual",
              "Benny Harvey R.I.P.",
              "Every integer > 1 can be represented by 2s and 3s",
              "Monkey never cramp",
              "My name means 'In the flesh'",
              "fav color: #800080",
              "I suck at frontend :p",
              "I have a hydroflask",
            ]}
            cursorColor={"white"}
          />
        </div>
        <br />
        <div className={styles.signature}>Made with &#9829; by Saak</div>
      </footer>
    </div>
  );
}
