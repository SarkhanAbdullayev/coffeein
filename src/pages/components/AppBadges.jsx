import React from 'react'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'

const AppBadges = () => {
    return (
        <div className="app-badges">
            <img src={playStore} alt="playStore" className='playStore' />
            <img src={appStore} alt="appStore" className='appStore' />
        </div>
    )
}

export default AppBadges