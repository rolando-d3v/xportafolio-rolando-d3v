import React, { useRef } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import data from "../../../data";
import { Toggle } from "../toggle/Toggle";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { openToggle } from "../../../store/slices/toggleSlice";

import { Player } from "@lottiefiles/react-lottie-player";

let linksItem = [
  {
    id: 0,
    text: "Home",
    href: "/",
    src_icon: "https://cdn.lordicon.com/kxoxiwrf.json",
  },
  {
    id: 1,
    text: "Info",
    href: "/info",
    src_icon: "https://cdn.lordicon.com/ljvjsnvh.json",
  },
  {
    id: 2,
    text: "Proyectos",
    href: "/proyectos",
    src_icon: "https://cdn.lordicon.com/qkmmvfdj.json",
  },
];

export default function Header() {
  const toggleReducer = useSelector((state) => state.toggleReducer);
  const { toggle } = toggleReducer;

  const dispatch = useDispatch();

  const btnToggle = () => {
    dispatch(openToggle(toggle === false ? true : false));
  };

  const itemEls = useRef([]);

  const peru = (index) => {
    if (index === 0) {
      let pop = itemEls.current[0];
      pop.play();
    } else if (index === 1) {
      let pop = itemEls.current[1];
      pop.play();
    } else {
      let pop = itemEls.current[2];
      pop.play();
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <section className={styles.header_logo}>
          <Link href="/">
            <a className={styles.logo_link}>
              <img src="logo_panda.png" alt="sin conexion a internet" />
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Roland{" "}
              </motion.span>
            </a>
          </Link>
        </section>

        <section className={styles.header_link}>
          {linksItem.map((li, index) => {
            return (
              <Link href={li.href} key={index}>
                <span
                  className={styles.link_item}
                  onMouseOver={() => peru(index)}
                >
                  <Player
                    src={li.src_icon}
                    ref={(element) => (itemEls.current[index] = element)}
                    style={{ height: "28px", width: "28px" }}
                  />
                  {li.text}
                </span>
              </Link>
            );
          })}

          {/* <Link href="/proyectos">
            <span className={styles.link_item} onMouseOver={perux}>
              <Player
                // autoplay
                // loop
                src="https://cdn.lordicon.com/qkmmvfdj.json"
                ref={playerRef}
                style={{ height: "28px", width: "28px" }}
              />
              home
            </span>
          </Link>

          <Link href="/proyectos">
            <span className={styles.link_item} onMouseOver={peruano}>
              <Player
                // autoplay
                // loop
                src="https://cdn.lordicon.com/qkmmvfdj.json"
                ref={player2}
                style={{ height: "28px", width: "28px" }}
              />
              home
            </span>
          </Link> */}
        </section>

        <section>
          <h3></h3>
        </section>

        <Toggle btnToggle={btnToggle} toggle={toggle} />
        <Sidebar toggle={toggle} linksItem={linksItem} />
      </div>
    </header>
  );
}
