import React, {useState} from 'react';
import './togglestyle.css';
// stateless funtional components: componentk sd state
// statefull funtional components

function Toggle() {
    // 1. enabling state: sử dụng ntn useState{ initialize value}
    // 2. initialize state: giá trị truyền vào (bool, number, string, arr, object) useState{ false }
    // 3. reading state:
    // 4. update state:

    // re-render: 
    const [on, setOn] = useState(false);
    console.log(on);
    const handleToggle = () => {
        setOn( preState => !preState);
    }
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
        </div>
    )
};

export default Toggle