import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'

interface HeaderProps {
    
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function openOrClose(e: any) {
        if(menuOpen === false) {
            e.target.src = 'images/icons/menu-close.svg'
            setMenuOpen(true)
        } else {
            setMenuOpen(false)
            e.target.src = 'images/icons/menu.svg'
        }

    }
    return (
        <div className="sm:grid sm:grid-cols-2 sm:m-auto sm:mt-10 mt-6 ml-5 mr-5">
            <div className="grid grid-cols-2 ">
                <Link
                  to="/posts"
                  className="sm:max-w-185 sm:text-4xl text-3xl text-green-bright font-medium  sm:inline"
                  >Блокнотик
                  </Link>
                <img id="menu_button" 
                onClick={openOrClose}
                alt="" className="sm:hidden justify-self-end cursor-pointer" src="images/icons/menu.svg" />
            </div>
            <Menu menuOpen={menuOpen}/>
            
        </div>
    )
}
 
export default Header;