import ReactRotatingText from "react-rotating-text";

import style from "./typewriter.module.scss";

export default function Typerwriter({ elements }) {
  return (
    <div>
      <ReactRotatingText items={elements} typingInterval={30} deletingInterval={30} pause={1000} cursor={false}/><text className={style.cursor}>▍</text>
    </div>
  );
}
