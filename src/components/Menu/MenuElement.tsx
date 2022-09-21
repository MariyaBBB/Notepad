import React from "react";
import { Link } from "react-router-dom";

interface IMenuElementProps {
  icon: string,
  name: string,
  link: string,
}

const MenuElement = ({icon, name, link}: IMenuElementProps) => {
    return(
         <li
            className="rounded-t-md sm:rounded-none sm:border-none border-b-1 border-gray-light sm:bg-gray-light bg-white"
          > 
            <Link
              to={link}
              className="sm:pt-0 pt-4 pb-4 sm:pb-0 sm:pl-0 pl-4 block text-base text-normal-black active:text-black sm:hover:text-hover-black
              active:bg-gray-bright active:sm:bg-gray-light active:sm:text-black"
            >
              <img className="float-left sm:m-1 sm:mr-1 mr-3 sm:w-auto sm:h-auto w-6 h-6" alt="" src={icon}/>
              {name}
            </Link>
    </li>
    )
}

export default MenuElement;