import React, { useState } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {

    const [isShown, setIsShown] = useState(true);

    const showHandler = () => {
        //setIsShown(isShown ? false : true);
        setIsShown((prevIsShown) => !prevIsShown);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {isShown && <p>This is new!</p>}
            <Button onClick={showHandler} disabled={false}>Click Here</Button>
        </div>
    );
}

export default App;
