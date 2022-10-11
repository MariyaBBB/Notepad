import React, { useEffect } from "react";
import MenuElement from "./MenuElement";
import { menuElements, IMenuItem } from "../../data/menuElements";

interface IMenuProps {
  menuOpen: boolean
}

const Menu = ({menuOpen}: IMenuProps ) => { 
  const lastElement = menuElements.length - 1
  return (
    <>    
    <menu
      className={menuOpen ? 'show mt-7 sm:max-w-fit sm:grid sm:grid-flow-col sm:content-center sm:justify-self-end sm:gap-5 sm:mt-0' : "hidden sm:max-w-fit sm:grid sm:grid-flow-col sm:content-center sm:justify-self-end sm:gap-5 sm:mt-0 mt-7" }
    >
      {menuElements.map((item: IMenuItem) => (
        <MenuElement
          isLast={menuElements.indexOf(item) === lastElement}
          key={item.link}
          icon={item.icon}
          name={item.name}
          link={item.link}
        />
      ))}
    </menu>

    </>
  );
};

export default Menu;
