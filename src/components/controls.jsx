import React from 'react';

const Controls = ({upCount, downCount, reset}) => {
    return (
        <div>
            <button type="button" onClick={upCount}>More</button>
            <button type="button"onClick={downCount}>Less</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}

export default Controls;
