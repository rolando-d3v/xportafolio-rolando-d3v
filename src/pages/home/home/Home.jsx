import React from "react";
import data from "../../../data";
import ext from "../../../assets/home/exterior.png";
import inter from "../../../assets/home/inter.png";
import cat from "../../../assets/home/cat.gif";
import Typical from "react-typical";
import css from "./home.module.scss";
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
    <section className={css.home_component} id="home">
      <div className={css.home_div}>
        <article className={css.home_info}>
          <p className={css.p_text}>
            <span className={css.text_hola}>Hola! </span>
            <span className={css.text_hola}>soy Rolando </span>
            <span className={css.manito}>👋</span>
          </p>
          <span className={css.text_bienvenidos}>Bienvenidos a mi pagina.</span>
          <h1 className={css.content_text}>
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

          <div className={css.content_typical}>
            <Typical
              steps={data.home.typical}
              loop={Infinity}
              className={css.text_typycal}
              wrapper="p"
            />
            <img src={cat} alt="red" className={css.cat_gif} />
          </div>

          <section className={css.header_link}>
            {data.nav.links.map((li, index) => (
              <ScrollLink
                to={li.to}
                key={index}
                smooth={true}
                className={css.link_item}
              >
                <span>{li.text}</span>
              </ScrollLink>
            ))}
          </section>
        </article>

      
          <div className={css.grafico}>
            <img className={css.img_ext} src={ext} alt="all" />
            <img className={css.img_inter} src={inter} alt="all" />
          </div>
 
      </div>
    </section>
  );
}
