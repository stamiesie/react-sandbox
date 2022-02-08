import Controls from "../components/controls";
import React, {useState} from 'react';
import Display from "../components/display";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleUpClick = () => {
        setCount(count + 1)
    }

    const handleDownClick = () => {
        setCount(count - 1);
    }

    const resetClick = () => {
        setCount(0);
    }

    return (
        <>
        <Controls
        upCount={handleUpClick}
        downCount={handleDownClick}
        reset={resetClick}
        />

        <Display
        count={count}
        />
        </>
    )
}

export default Counter;
