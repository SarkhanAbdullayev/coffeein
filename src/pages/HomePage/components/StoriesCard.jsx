import React from 'react'
import quoteMark from '../../../assets/images/quoteMark.svg'

const StoriesCard = ({ data, width }) => {
    const { icon, storyText, fullName, position } = data
    return (
        <div className='stories-card' style={{ width: width }}>
            <img className='stories-card-icon' src={icon} alt="" />
            <div className="stories-card-content">
                <img className='stories-card-quoteMark' src={quoteMark} alt="" />
                <div className="stories-card-description">
                    <p className='stories-card-storyText'>{storyText}</p>
                    <div className='stories-card-fullNamePosition'>
                        <h3 className='stories-card-fullName'>{fullName}</h3>
                        <p className='stories-card-position'>{position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesCard