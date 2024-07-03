import React from 'react'

const FuturesCard = ({ data }) => {
    const { icon, title, description } = data
    return (
        <div className='features-card'>
            <img className='features-card-icon' src={icon} alt="" />
            <h2 className='features-card-title'>{title}</h2>
            <p className='features-card-description'>{description}</p>
        </div>
    )
}

export default FuturesCard