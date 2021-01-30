import ReactRotatingText from "react-rotating-text";

import style from "./typewriter.module.scss";

export default function TypeWriter({ elements }) {
  return (
    <div>
      <ReactRotatingText items={elements} typingInterval={25} pause={1000} cursor={false}/><text className={style.cursor}>_</text>
    </div>
  );
}
