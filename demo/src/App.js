import React, { useState, useCallback } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const [isShown, setIsShown] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const showHandler = useCallback(() => {
        //setIsShown(isShown ? false : true);
        if(isToggled) {
            setIsShown((prevIsShown) => !prevIsShown);
        }
    }, [isToggled]);

    const toggleHandler = () => {
        setIsToggled((prevState) => !prevState );
    }

    console.log('App RUNNING');

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={isShown}/>
            <Button onClick={toggleHandler} disabled={false}>Toggle Switch</Button>
            <p></p>
            <Button onClick={showHandler} disabled={false}>Click Here</Button>
        </div>
    );
}

export default App;
