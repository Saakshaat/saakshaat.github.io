import ReactRotatingText from "react-rotating-text";

import style from "./typewriter.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Typerwriter({ elements, cursorColor, speed }) {
  return (
    <div>
      <ReactRotatingText
        items={elements}
        typingInterval={speed ? speed : 30}
        deletingInterval={speed ? Number(speed/30) : 10}
        pause={1000}
        cursor={false}
      />
      <text
        className={`${style.cursor} ${
          cursorColor === "white"
            ? utilStyles.white
            : cursorColor === "black"
            ? utilStyles.black
            : cursorColor === 'accentDark'
            ? utilStyles.accentDark
            : utilStyles.default
        }`}
      >
        ▍
      </text>
    </div>
  );
}
