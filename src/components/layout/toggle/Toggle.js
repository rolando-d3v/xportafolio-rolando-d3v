import * as React from "react";
import css from "./toggle.module.scss";

export const Toggle = ({ btnToggle, toggle }) => (
  <button
    className={`${css.toggle}  ${toggle && css.open} `}
    onClick={btnToggle}
  >
    <div className={css.menu_btn__burger}></div>
  </button>
);
