import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {

        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

    const emailValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !emailValid &&
        enteredEmailIsTouched;

    let formIsValid = false;

    if (enteredNameIsValid &&
        emailValid) {
        formIsValid = true;
    }

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    };


    const emailInputBlurHandler = event => {
        setEnteredEmailIsTouched(true);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        resetNameInput();

        setEnteredEmail('');
        setEnteredEmailIsTouched(false);
    };


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (<form onSubmit={formSubmissionHandler}>

            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    value={enteredName}
                    onBlur={nameBlurHandler}/>
                {nameInputHasError &&
                    <p className="error-text">Name must not be empty!</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    onBlur={emailInputBlurHandler}/>
                {emailInputIsInvalid &&
                    <p className="error-text">Enter a valid E-Mail!</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>);
};

export default SimpleInput;
