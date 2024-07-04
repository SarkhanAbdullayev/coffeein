import React from 'react'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'

const AppBadges = () => {
    return (
        <div className="app-badges">
            <a href="https://play.google.com/store/apps/details?id=az.coffeein&hl=az" target="_blank">
                <img src={playStore} alt="playStore" className='playStore' />
            </a>
            <a href="https://apps.apple.com/az/app/coffeein-az/id6476442549" target="_blank"  >
                <img src={appStore} alt="appStore" className="appStore"/>
            </a>
        </div>
    )
}

export default AppBadges