import React from 'react';

const Display = ({count}) => {
    if(count % 15 === 0 && count !== 0) return <div>FizzBuzz</div>
    if(count % 5 === 0 && count !== 0) return <div>Buzz</div>
    if(count % 3 === 0 && count !== 0) return <div>Fizz</div>
    return <div>Count: {count}</div>
    }

export default Display;
