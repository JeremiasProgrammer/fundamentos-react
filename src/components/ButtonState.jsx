import { useState } from "react";

const ButtonState = () => {
    // let count = 0;

    const [count, setCount] = useState(0);

    // const stateNumber = arrayState[0];
    // const stateFunction = arrayState[1];

    const handleClick = () => {
        // stateFunction(stateNumber + 1);
        setCount(count + 1);
    }

    return <button onClick={handleClick}>buttonstate: {count}</button>
};

export default ButtonState;