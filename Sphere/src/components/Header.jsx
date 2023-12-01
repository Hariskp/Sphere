import React, { useState } from 'react'
import { FiMoon,FiX,FiMenu} from "react-icons/fi";
import './Header.css'



function Header() {

    const [click , setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href='#'>SPHERE <FiMoon/></a>
                    </div>
                    <ul className='menu'>
                        <li className='menu-link'>
                            <a href='#'>ABOUT</a>
                        </li>
                        <li className='menu-link'>
                            <a href='#'>CONTACT</a>
                        </li>
                        <li className='menu-link'>
                            <a href='#'>TEAM</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                            {click ? (
                                <FiX/>
                            ) : (
                                <FiMenu/>
                            )}
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Header