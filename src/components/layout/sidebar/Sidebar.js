import React from "react";
import css from "./sidebar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import { Player} from "@lottiefiles/react-lottie-player";

export default function Sidebar({ toggle, linksItem }) {
  return (
    <aside className={` ${css.sidebar}  ${toggle ? css.open_sidebar : ""} `}>
      <article className={css.content_sidebar}>
        {linksItem.map((li, index) => (
          <Link href={li.href} key={index}>
            <span className={css.text_link}>
              <Player
                autoplay
                loop
                hover
                src={li.src_icon}
                style={{ height: "28px", width: "28px" }}
              ></Player>
              {li.text}
            </span>
          </Link>
        ))}
      </article>
    </aside>
  );
}
