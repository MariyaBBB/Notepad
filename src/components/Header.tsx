import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'

interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <div className="sm:grid sm:grid-cols-2 sm:m-auto sm:mt-10 mt-6 ml-5 mr-5">
            <div className="grid grid-cols-2 ">
                <Link
                  to="/posts"
                  className="sm:max-w-185 sm:text-4xl text-3xl text-green-bright font-medium  sm:inline"
                  >Блокнотик
                  </Link>
                <img id="menu_button" alt="" className="sm:hidden justify-self-end cursor-pointer" src="images/icons/menu.svg" />
            </div>
            <Menu />
            
        </div>
    )
}
 
export default Header;