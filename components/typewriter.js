import ReactRotatingText from "react-rotating-text";

import style from "./typewriter.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Typerwriter({ elements, cursorColor }) {
  return (
    <div>
      <ReactRotatingText
        items={elements}
        typingInterval={30}
        deletingInterval={30}
        pause={1000}
        cursor={false}
      />
      <text
        className={`${style.cursor} ${
          cursorColor === "white"
            ? utilStyles.white
            : cursorColor === "black"
            ? utilStyles.black
            : utilStyles.default
        }`}
      >
        ▍
      </text>
    </div>
  );
}
