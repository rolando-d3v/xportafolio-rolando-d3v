import React from "react";
import styles from "./proyectos.module.scss";
import { motion } from "framer-motion";

export default function ServiciosComponents() {
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
    <section className={styles.proyectos_component} id="proyectos">
      <div className={styles.content_title}>
        <span className={styles.proyecto_title}>Proyectos</span>
        <img src="logo_panda_original.png" alt="nuevo" />
        {/* <img src="/proyectos/logo_gif.gif" alt="nuevo" /> */}
      </div>
      <div className={styles.proyectos_div}>
        <article className={styles.proyecto}>
          <p className={styles.content_nombre}>
            <span>
              Aplicacion <strong>Examen R</strong>{" "}
            </span>
            <img src="/proyectos/azul_mejor.png" alt="nuevo" />
          </p>
          <p>Cuestionario de preguntas</p>
          <div className={styles.div_img}>
            <img src="/proyectos/app_exam.jpeg" alt="eee" />
          </div>
        </article>
        {/*  */}
        {/*  */}
        <article className={styles.proyecto}>
          <p className={styles.content_nombre}>
            <span>
              Aplicacion <strong>Examen R</strong>{" "}
            </span>
            <img src="/proyectos/azul_mejor.png" alt="nuevo" />
          </p>
          <p>Cuestionario de preguntas</p>
          <div className={styles.div_img}>
            <img src="/proyectos/exam2.jpeg" alt="eee" />
          </div>
        </article>
        {/* <article className={styles.proyecto}>
          <p className={styles.content_nombre}>
            <span>
              Aplicacion <strong>Examen R</strong>{" "}
            </span>
            <img src="/proyectos/azul_mejor.png" alt="nuevo" />
          </p>
          <p>Cuestionario de preguntas</p>
          <div className={styles.div_img}>
            <img src="/proyectos/app_exam.jpeg" alt="eee" />
          </div>
        </article>
        <article className={styles.proyecto}>
          <p className={styles.content_nombre}>
            <span>
              Aplicacion <strong>Examen </strong>{" "}
            </span>
            <img src="/proyectos/azul_mejor.png" alt="nuevo" />
          </p>
          <p>Cuestionario de preguntas</p>
          <div className={styles.div_img}>
            <img src="/proyectos/app_exam.jpeg" alt="eee" />
          </div>
        </article> */}

        <div className={styles.content_text}>
          <motion.h4
            variants={item1}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            Tu puedes
          </motion.h4>
          <motion.h4
            variants={item2}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Solo tienes que creertelo.
          </motion.h4>
          <motion.h4
            initial="hidden"
            animate="visible"
            variants={item3}
            transition={{ delay: 3 }}
          >
            Aprende lo que te divierte
          </motion.h4>
        </div>
      </div>
    </section>
  );
}
