import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./modal.module.scss";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function ModalCard({ layoutId, children }) {
  const [isOpened, setOpened] = useState(false);
  const closed = children.length > 1 ? children[0] : null;
  const open = children.length > 1 ? children[1] : children[0];
  const node = useRef();
  const handleClick = (e) => {
    setOpened(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <AnimatePresence layoutId={layoutId}>
      {isOpened ? (
        <motion.div
          ref={node}
          onClick={() => setOpened(false)}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          {open}
        </motion.div>
      ) : (
        <motion.div onClick={() => setOpened(true)}>{closed}</motion.div>
      )}
    </AnimatePresence>
  );
}
