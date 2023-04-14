import { useState, useEffect } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    useEffect(() => {

    },[enteredNameIsValid]);

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);

    };

    const nameInputBlurHandler = event => {
        setEnteredNameIsTouched(true);

    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameIsTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        //nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName('');
        setEnteredNameIsTouched(false);
    };



    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       value={enteredName}
                       onBlur={nameInputBlurHandler}/>
                {nameInputIsInvalid  && <p className="error-text">Name must not be empty!</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
