import React from "react";
import Header from "../header/Header";
import styles from "./layoutContent.module.scss";

import store from "../../../store";
import { Provider } from "react-redux";

export default function LayoutContent(props) {
  return (
    <div className={styles.layout_content}>
      <Provider store={store}>
        <Header />
        {props.children}
      </Provider>
    </div>
  );
}
