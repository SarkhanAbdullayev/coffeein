import React from 'react'

import logo from '../../assets/images/coffeein-logo.svg'
import AppBadges from './AppBadges'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-start">
                <img src={logo} alt="" />
            </div>
            <div className="footer-end">
                <p className='get-the-app'>Get the App</p>
                <AppBadges />
            </div>
        </footer>
    )
}

export default Footer