import React from "react";
import MenuElement from "./MenuElement";
import { menuElements, IMenuItem } from "../../data/menuElements";

const Menu = () => {
  return (
    <menu
      className="sm:max-w-fit sm:grid sm:grid-flow-col hidden sm:content-center sm:justify-self-end sm:gap-5 sm:mt-0 mt-7"
    >
      {menuElements.map((item: IMenuItem) => (
        <MenuElement
          key={item.name}
          icon={item.icon}
          name={item.name}
          link={item.link}
        />
      ))}
    </menu>
  );
};

export default Menu;
