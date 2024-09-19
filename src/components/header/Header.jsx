import React, { useState } from 'react'
import "./Header.css";


const Header = () => {
 
    return (
        <header className='header'>
        <nav className='nav container'>
        <a href="index.html" className='nav_logo'>HEREDIA ENZO</a>
        <div className={Toggle ? "nav_menu show-menu" :"nav_menu"}>
        <ul className='nav_list grid'>
            <li className='nav_item'>
            <a href="#home" className='nav_link active-link'>
                <i className='uil uil-estate nav_icon'></i> Home
            </a>
            </li>

            <li className='nav_item'>
            <a href="#about" className='nav_link'>
                <i className='uil uil-user nav_icon'></i> About
            </a>
            </li>

            <li className='nav_item'>
            <a href="#skills" className='nav_link'>
                <i className='uil uil-file-alt nav_icon'></i> Skills 
            </a>
            </li>

            <li className='nav_item'>
            <a href="#education" className='nav_link'>
                <i className='uil uil-award nav_icon'></i> Education
            </a>
            </li>

            <li className='nav_item'>
            <a href="#portafolio" className='nav_link'>
                <i className='uil uil-scenery nav_icon'></i> Portafolio 
            </a>
            </li>

            <li className='nav_item'>
            <a href="#contact" className='nav_link'>
                <i className='uil uil-message nav_icon'></i> Contact 
            </a>
            </li>
        </ul>
        <i className='uil uil-times nav_close'></i>
        </div>
        <div className='nav_toggle'>
        <i className='uil uil-apps'></i>
        </div>
        </nav>
    </header>
  )
}

export default Header
