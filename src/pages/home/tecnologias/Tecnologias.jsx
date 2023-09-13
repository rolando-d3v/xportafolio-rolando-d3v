import React from "react";
import { motion } from "framer-motion";
import py from "../../../assets/tecnologias/PYTHON.png";
import js from "../../../assets/tecnologias/javascript.png";
import wall01 from "../../../assets/tecnologias/1.png";
import css from "./tecnologias.module.scss";

export default function Tecnologias() {
  return (
    <div className={css.content_tecnologias} id="perfil">
      <section className={css.section_tecno}>
        <motion.img
          initial={{
            opacity: 0,
            translateX: -180,
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          whileHover={{
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
            translateX: -52,
            scale: 1.2,
          }}
          viewport={{ root: true }}
          transition={{ delay: 0.3 }}
          className={css.js}
          src={js}
          alt=""
        />
        <motion.img
          initial={{
            opacity: 0,
            translateX: -200,
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
          }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          whileHover={{
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
            translateX: -52,
            scale: 1.2,
          }}
          viewport={{ root: true }}
          transition={{ delay: 0.3 }}
          className={css.python}
          src={py}
          alt=""
        />
        <motion.img
          initial={{
            opacity: 0,
            translateX: -180,
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
          }}
          whileHover={{
            rotateY: -20,
            rotateX: 20,
            rotateZ: 7,
            translateX: -52,
            scale: 1.2,
          }}
          whileTap={{
            translateX: 0,
            scale: 1.,
          }}
          whileInView={{ opacity: 1, translateX: -0}}
          viewport={{ root: true }}
          transition={{ delay: 0.6}}
          className={css.wall01}
          src={wall01}
          alt=""
        />
      </section>
    </div>
  );
}
