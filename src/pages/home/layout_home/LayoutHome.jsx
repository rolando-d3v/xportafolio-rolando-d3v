import React from "react";
import css from "./layout_home.module.scss";
import HomeComponent from "../home/Home";
import Tecnologias from "../tecnologias/Tecnologias";
import About from "../about/About";
// import { motion } from "framer-motion";
export default function LayoutHome() {


  return (
    <div className={css.home_component} >
      <HomeComponent/>
      <Tecnologias/>
      <About/>
    </div>
  );
}
