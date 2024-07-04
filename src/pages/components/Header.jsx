import { useState, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";


import logo from '../../assets/images/coffeein-logo.svg'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'
import AppBadges from './AppBadges';

const Header = ({ storiesRef, cloudsRef, downloadRef }) => {

    const [burger, setBurger] = useState(false);
    const chechboxRef = useRef();

    const navItems = [
        { title: 'Solutions', ref: storiesRef },
        { title: 'Resources', ref: cloudsRef },
        { title: 'Download', ref: downloadRef },
        { title: 'Pricing' },
    ];

    const screenWidth = window.innerWidth;

    const navbarItemClickHandler = (ref) => {
        if (screenWidth < 476) {
            setBurger('translateX(-100%)');
        }
        if (ref.current) {
            ref?.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div className='header'>
            <nav className="navbar">
                <img src={logo} alt="logo" className='navbar-logo' />
                <ul className="navbar-items" style={{ transform: burger }}>
                    {
                        navItems.map((item, index) =>
                            <li className="navbar-item" key={index} onClick={() => navbarItemClickHandler(item.ref)}>
                                {item.title}<IoIosArrowDown />
                            </li>)
                    }
                </ul>
                <AppBadges />
                <div className='burger' >
                    <input className="checkbox" ref={chechboxRef} type="checkbox" name="" id="" onChange={(e) => {
                        e.target.checked ? setBurger('translateX(0%)') : setBurger('translateX(-100%)')
                    }} />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header