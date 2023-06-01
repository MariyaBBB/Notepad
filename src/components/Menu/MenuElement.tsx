import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon} from "../../assets/icons/add.svg";
import { ReactComponent as NoteIcon} from "../../assets/icons/note.svg";

interface IMenuElementProps {
  isLast: boolean,
  icon?: string,
  name: string,
  link: string,
}

const MenuElement = ({isLast, icon, name, link}: IMenuElementProps) => {

    console.log(AddIcon);
    return(
         <li
            className= {isLast? "rounded-b-md sm:rounded-none sm:border-none border-b-1 border-gray-light sm:bg-gray-light bg-white":
           "rounded-t-md sm:rounded-none sm:border-none border-b-1 border-gray-light sm:bg-gray-light bg-white "}
          > 
            <Link
              to={link}
              className="link sm:pt-0 pt-4 pb-4 sm:pb-0 sm:pl-0 pl-4 block text-base text-normal-black active:text-black sm:hover:text-hover-black
              active:bg-gray-bright active:sm:bg-gray-light active:sm:text-black"
            >
              {icon === 'add' ?
              <AddIcon className="icon float-left sm:m-1 sm:mr-1 mr-3 sm:w-auto sm:h-auto h-6 w-6 flex  fill-green active:fill-green-bright sm:hover:fill-green-light "/> :
              <NoteIcon className="icon float-left sm:m-1 sm:mr-1 mr-3 sm:w-auto sm:h-auto w-6 h-6 flex fill-green active:fill-green-bright sm:hover:fill-green-light "/>
              }
              
              {name}
            </Link>
    </li>
    )
}

export default MenuElement;