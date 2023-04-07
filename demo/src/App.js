import React, { useState } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const [isShown, setIsShown] = useState(false);

    const showHandler = () => {
        //setIsShown(isShown ? false : true);
        setIsShown((prevIsShown) => !prevIsShown);
    };

    console.log('App RUNNING');

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={isShown}/>
            <Button onClick={showHandler} disabled={false}>Click Here</Button>
        </div>
    );
}

export default App;
