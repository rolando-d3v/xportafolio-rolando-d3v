import { useEffect, useState } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import css from "./homeRouter.module.scss";
import Home from "../pages/home/layout_home/LayoutHome";
import Header from "../layout_base/header_navigation/Header";
import LayoutInfo from "../pages/info/layout/LayoutInfo";
// import HeadNavegador from "../layoutBase/navigation/HeadNavegador";
// import SidebarCentroM from "../layoutBase/sidebar/SidebarCentroM";
// import RegistrarDocumentos from "../pages/registro_individual/layout/RegistrarDocumentos";
// import DecretarDocumentos from "../pages/decretar_documentos/layout/DecretarDocumentos";
// import DocRecibidos from "../pages/documentos_recibidos/layout/DocRecibidos";
// import Home from "../pages/home/Home";
// import IdDocumento from "../pages/id_documento/layout/IdDocumento";
// import RemitirDoc from "../pages/remitir_documento/layout/RemitirDoc";
// import DerivarDocumentos from "../pages/derivar_documentos/layout/DerivarDocumentos";
// import IdDerivar from "../pages/id_derivar/layout/IdDerivar";
// import RegistroMultiple from "../pages/registro_multiple/layout/RegistroMultiple";
// import Layout404 from "../pages/404/Layout404/Layout404";
// import DecretoDocumentoSD from "../pages/decreto_documentos_SD/layout/DecretoDocumentoSD";
// import DocRemitidos from "../pages/documentos_remitidos/layout/DocRemitidos";

export default function HomeRouter() {
  // const { estado_sidebar, isDarkMode } = useSelector(
  //   (state) => state.baseStyle
  // );


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={css.homeRoter_principal} 


      // className={`${css.homeRoter_principal} 
      //  ${isDarkMode ? css.principalDark : css.principalDia}   `}
    >
      {/* <HeadNavegador /> */}
      {/* <SidebarCentroM /> */}


      <Header/>
      <div
        // className={`${css.content_layout} 
        //  ${isDarkMode ? css.contentDark : css.contentDia}  ${
        //   !estado_sidebar && css.change_border
        // }  ${!estado_sidebar && css.open_side}   `}
      >
        <Routes>
          {/* <Route path="/documentos-recibidos" element={<DocRecibidos />} />
          <Route path="/documentos-remitidos" element={<DocRemitidos />} />
          <Route path="/documentos-recibidos/:id" element={<IdDocumento />} />
          <Route path="/decreto-documentos" element={<DecretarDocumentos />} />
          <Route path="/decreto-documentos/:id" element={<IdDerivar />} />
          <Route
            path="/decreto-documentos-SD"
            element={<DecretoDocumentoSD />}
          />
          <Route path="/derivar-documentos" element={<DerivarDocumentos />} />
          <Route path="/remithttps://www.dropbox.com/signatures?_tk=web_left_nav_bar&role=personal&di=left_navir-documento" element={<RemitirDoc />} />
          <Route path="/registro-multiple-serv" element={<RegistroMultiple />} />
          <Route
            path="/registro_individual"
            element={<RegistrarDocumentos />}
          />
        */}
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<LayoutInfo />} />
        <Route path="/" element={<Navigate to="/home" />} /> 
        
        </Routes>
      </div>
{/* 
      <article
        className={`${css.footer}  
        ${isDarkMode ? css.footerDark : css.footerDia}  `}
      >
        <p className={css.text_footer}>
          {" "}
          Departamento de Tecnologias para Inteligencia Copyright ©{" "}
          {new Date().getFullYear()}{" "}
        </p>
      </article> */}
    </motion.div>
  );
}
