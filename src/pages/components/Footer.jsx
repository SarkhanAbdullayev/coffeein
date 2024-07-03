import React from 'react'

import logo from '../../assets/images/coffeein-logo.svg'
import AppBadges from './AppBadges'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-start">
                <img className='logo' src={logo} alt="" />
                <div className="row">
                    <a href="#">Download now</a>
                    <a href="#">Licence</a>
                </div>
                <div className="row">
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">News</a>
                    <a href="#">Help</a>
                    <a href="#">Contact</a>
                </div>
                <p className='copyright'>© 2021 Landify UI Kit. All rights reserved</p>
            </div>
            <div className="footer-end">
                <p className='get-the-app'>Get the App</p>
                <AppBadges />
            </div>
        </footer>
    )
}

export default Footer