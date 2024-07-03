import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


import logo from '../../assets/images/coffeein-logo.svg'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'
import AppBadges from './AppBadges';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar">
                <img src={logo} alt="logo" className='navbar-logo' />
                <ul className="navbar-items">
                    <li className="navbar-item">Solutions <IoIosArrowDown /></li>
                    <li className="navbar-item">Resources <IoIosArrowDown /></li>
                    <li className="navbar-item">Download <IoIosArrowDown /></li>
                    <li className="navbar-item">Pricing <IoIosArrowDown /></li>
                </ul>
                <AppBadges />
                <div className="menu">menu</div>
            </nav>
        </div>
    )
}

export default Header