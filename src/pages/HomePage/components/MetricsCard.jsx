import { useState } from 'react'
import { AnimatedCounter } from "react-animated-counter";

const MetricsCard = ({ icon, count, description }) => {

    const [counterValue, setCounterValue] = useState(500);
    const handleCounterUpdate = (increment) => {
        const delta = (Math.floor(Math.random() * 100) + 1) * 0.99;
        setCounterValue(increment ? counterValue + delta : counterValue - delta);
    };
    return (
        <div className='metrics-card'>
            {/* <div>
                <AnimatedCounter value={counterValue} color="red" fontSize="40px" />
                <div>
                    <button onClick={() => handleCounterUpdate(false)}>Decrement</button>
                    <button onClick={() => handleCounterUpdate(true)}>Increment</button>
                </div>
            </div> */}
            <img className='metrics-card-icon' src={icon} alt="" />
            <div className="metrics-card-body">

                <h2 className='metrics-card-count'>{count}</h2>
                <p className='metrics-card-description'>{description}</p>
            </div>
        </div>
    )
}

export default MetricsCard