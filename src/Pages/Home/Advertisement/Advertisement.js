import React from 'react';

const Advertisement = () => {
    const handleTime = () => {
        const current = new Date();
const time = current.toLocaleDateString("en-BD");
console.log(time);
    }
    return (
        <div className='bg-red-500 w-full h-96'>
            <button onClick={handleTime} className='btn'>Get Time</button>
        </div>
    );
};

export default Advertisement;