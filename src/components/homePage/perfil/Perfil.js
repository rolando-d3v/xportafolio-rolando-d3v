import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./perfil.module.scss";

export default function Perfil() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);


  return (
    <section className={styles.perfil_component} id="perfil">
      <div className={styles.perfil_div}>
        <motion.section className={styles.perfil_info} style={{ scale }} >
          <motion.div className={styles.content_img}>
            <img
              src="/perfil/foto_rolando_avatar.png"
              alt="sin conexion a internet"
            />
            <div>
              <strong> Rolando A. Mamani Flores</strong>
              <strong>Ing Sistemas</strong>
            </div>
          </motion.div>
          <div className={styles.content_text}>
            <p>Soy programador web y creador de contenido.</p>
            <p>
              <span>Ubicado en la ciudad de lima - Peru</span>
              <img
                src="/perfil/bandera.jpg"
                alt="sin conexion a internet"
                style={{ width: 30, marginLeft: 12 }}
              />
            </p>
          </div>
        </motion.section>
        {/*  */}
        <section className={styles.perfil_servicios}>
          <article>
            <div className={styles.content_serv}>
              <motion.strong whileHover={{ scale: 1.1 }}>
                -Servicios
              </motion.strong>
              <p> -Colaboracion mutua entre Profesional y cliente</p>
            </div>

            <div className={styles.content_ofrezco}>
              <strong>¿Que te ofrezco ?</strong>
              <ul className={styles.ul_list}>
                <li>Consultoría en diseño y desarrollo web.</li>
                <li>Diseño y desarrollo de sitios y aplicaciones web.</li>
                <li>Mentoría en creación de contenidos digitales.</li>
                <li>Cursos presenciales y en línea a la medida.</li>
                <li>Ecommerce y pasarela de pagos.</li>
              </ul>
            </div>
          </article>
          <div className={styles.gif_div}>
            <img src="/perfil/git.gif" alt="" />
          </div>
        </section>
      </div>
    </section>
  );
}
