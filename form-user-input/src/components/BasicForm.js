import useInput from "../hooks/use-input";

const BasicForm = (props) => {


    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: nameReset
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: lastNameReset
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailReset
    } = useInput(value => value.includes('@'));


    let formIsValid = false;

    if (nameIsValid && lastNameIsValid && emailIsValid)
        {
            formIsValid = true;
        }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        console.log(enteredName);

        lastNameReset();
        nameReset();
        emailReset();
    };

    const nameClasses = nameInputHasError ? "form-control invalid" : "form-control";
    const lastNameClasses = lastNameInputHasError ? "form-control invalid" : "form-control";
    const emailClasses = emailInputHasError ? "form-control invalid" : "form-control";


    return (<form onSubmit={formSubmitHandler}>
        <div className='control-group'>
          <div className={nameClasses}>
            <label htmlFor='name'>First Name</label>
            <input
                type='text'
                id='name'
                onChange={nameChangeHandler}
                value={enteredName}
                onBlur={nameInputBlurHandler}
            />
              {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='last-name'>Last Name</label>
            <input
                type='text'
                id='last-name'
                onChange={lastNameChangeHandler}
                value={enteredLastName}
                onBlur={lastNameInputBlurHandler}
            />
              {lastNameInputHasError && <p className="error-text">Last name must not be empty!</p>}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input
              type='email'
              id='email'
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={emailInputBlurHandler}
          />
            {emailInputHasError && <p className="error-text">Enter a valid email!</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>);
};

export default BasicForm;
