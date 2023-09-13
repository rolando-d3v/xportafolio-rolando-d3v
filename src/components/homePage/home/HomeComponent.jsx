import React from "react";
import data from "../../../data";
import Typical from "react-typical";
import styles from "./home.module.scss";
import { motion } from "framer-motion";

import { Link as ScrollLink } from "react-scroll";

export default function HomeComponent() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const item1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const item2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const item3 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={styles.home_component} id="home">
      <div className={styles.home_div}>
        <article className={styles.home_info}>
          <p className={styles.p_text}>
            <span className={styles.text_hola}>Hola! </span>
            <span className={styles.manito}>👋</span>
          </p>
          <span className={styles.text_bienvenidos}>
            Bienvenidos a mi pagina.
          </span>
          <h1 className={styles.content_text}>
            <motion.span
              variants={item1}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              Tu puedes
            </motion.span>
            <motion.span
              variants={item2}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              Solo tienes que creertelo.
            </motion.span>
            <motion.span
              variants={item3}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.5 }}
            >
              Aprende lo que te divierte
            </motion.span>
          </h1>
          {/*  */}
          <div className={styles.content_typical}>
            <Typical
              steps={data.home.typical}
              loop={Infinity}
              className={styles.text_typycal}
              wrapper="p"
            />
            <img src="/home/cat.gif" alt="red" className={styles.cat_gif} />
          </div>

          <section className={styles.header_link}>
            {data.nav.links.map((li, index) => (
              <ScrollLink
                to={li.to}
                key={index}
                smooth={true}
                className={styles.link_item}
              >
                <span>{li.text}</span>
              </ScrollLink>
            ))}
          </section>
        </article>

        <article className={styles.home_img}>
          <motion.img
            src={data.home.img}
            alt="sin conexion a internet"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 2.5 }}
          />
        </article>
      </div>
    </section>
  );
}
