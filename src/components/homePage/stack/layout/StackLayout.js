import React from "react";

import css from "./layout.module.scss";

const ListaImg = [
  { text: "React", img: " /stack/react.png" },
  { text: "Javascript", img: "/stack/js.png" },
  { text: "Node js", img: "/stack/node.png" },
  { text: "Electron js", img: "/stack/elentron.png" },
  { text: "Golang", img: "/stack/golang.png" },
  { text: "Postgress", img: "/stack/post.png" },
  { text: "Mysql", img: "/stack/mysql.png" },
  { text: "Mongo DB", img: "/stack/mongo.png" },
];

export default function StackLayout() {
  return (
    <div className={css.layout}>
      <article className={css.content_img}>
        {ListaImg.map((e) => {
          return (
            <div className={css.div_img} >
              <img className={css.item_img} src={e.img} alt={e.text} />
              <span> {e.text} </span>
            </div>
          );
        })}
      </article>
    </div>
  );
}
