import React from "react";

const Menu = ({ title, price, img, desc, category, link }) => {
  return (
    <article className="menu-item">
      <img className="photo" src={img} alt="" />

      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <div className="price">$ {price}</div>
        </header>
        <div className="item-text">{desc}</div>
        <a
          style={{ marginTop: ".5rem", textTransform: "capitalize" }}
          className="price "
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          more infor
        </a>
      </div>
    </article>
  );
};

export default Menu;
