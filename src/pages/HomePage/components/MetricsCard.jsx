import React from 'react'

const MetricsCard = ({ icon, count, description }) => {
    return (
        <div className='metrics-card'>
            <img className='metrics-card-icon' src={icon} alt="" />
            <div className="metrics-card-body">
                <h2 className='metrics-card-count'>{count}</h2>
                <p className='metrics-card-description'>{description}</p>
            </div>
        </div>
    )
}

export default MetricsCard