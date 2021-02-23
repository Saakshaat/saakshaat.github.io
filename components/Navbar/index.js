import { useState, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSocialIcon } from "react-animated-social-icons";

import styles from "./index.module.scss";
import utilStyles from "../../styles/utils.module.scss";

export default function Navbar({ current, pages }) {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            style={{ border: "none" }}
            onClick={handleClick}
            className={`${styles.button} ${styles.closedButton}`}
          >
            <motion.svg
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              width="4rem"
              height="4rem"
              viewBox="0 0 612.000000 612.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,612.000000) scale(0.100000,-0.100000)"
                fill="#000000"
              >
                <motion.path
                  d="M2190 5084 c-30 -8 -78 -30 -105 -49 -28 -19 -195 -180 -371 -357
-243 -246 -335 -345 -382 -414 -272 -402 -341 -888 -191 -1347 143 -438 508
-809 947 -961 173 -60 300 -80 502 -80 269 0 466 46 699 165 146 74 259 158
406 300 96 93 122 125 152 186 33 67 37 82 36 151 -1 143 -72 260 -197 325
-56 29 -69 32 -156 32 -133 0 -176 -21 -322 -162 -127 -122 -176 -159 -281
-208 -118 -56 -184 -70 -337 -69 -152 0 -217 14 -338 70 -256 118 -422 347
-463 638 -24 168 21 368 116 523 39 63 107 137 361 388 372 368 369 365 369
525 0 101 -1 108 -34 169 -45 82 -119 144 -208 171 -76 23 -127 24 -203 4z"
                />
                <path
                  d="M3343 4240 c-172 -22 -326 -70 -498 -155 -155 -77 -266 -157 -414
-300 -128 -124 -165 -177 -188 -269 -28 -116 4 -231 93 -326 24 -25 69 -60
101 -75 52 -26 69 -29 153 -30 134 0 177 22 323 163 131 126 161 150 254 196
358 180 807 64 1028 -265 97 -144 138 -282 138 -459 0 -126 -16 -209 -59 -312
-56 -133 -105 -191 -421 -503 -367 -360 -368 -362 -368 -525 0 -91 3 -111 24
-150 57 -108 130 -167 241 -196 83 -21 154 -13 240 27 57 27 100 65 363 327
165 163 325 329 357 367 331 402 431 942 269 1445 -167 520 -633 926 -1174
1025 -107 19 -361 27 -462 15z"
                />
              </g>
            </motion.svg>
          </motion.button>
        ) : (
          <motion.div
            key={"navbar"}
            ref={node}
            className={`${styles.expandedContainer}`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.button
              onClick={handleClick}
              className={`${styles.button} ${styles.expandedButton}`}
            >
              <svg
                width="4rem"
                height="4rem"
                viewBox="0 0 612.000000 612.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                />
                <g fill="#ffffff" />
              </svg>
            </motion.button>
            <a
              href="/#"
              onClick={handleClick}
              className={`${styles.homeButton}`}
            >
              &#9675;
            </a>
            <div className={`${styles.linksContainer}`}>
              <ul className={styles.links}>
                {pages.map(({ title, id }) => {
                  return (
                    <li className={styles.listItems}>
                      <a href={`${current}#${id}`} onClick={handleClick}>
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.socials}>
                <div>
                  <AnimatedSocialIcon
                    brandName="github"
                    url="https://github.com/saakshaat"
                    animation="grow"
                    defaultColor="#f8f8f8"
                    width="1.5em"
                    animationDuration={0.2}
                    // style={{ padding: "3em" }}
                  />
                </div>
                <div>
                  <AnimatedSocialIcon
                    brandName="linkedin"
                    url="https://linkedin.com/in/saakshaat"
                    animation="grow"
                    defaultColor="#f8f8f8"
                    width="1.5em"
                    animationDuration={0.2}
                    // style={{ padding: "3em" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
