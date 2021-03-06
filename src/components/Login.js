import React, { useState } from "react";

const initialFormValues = {
  username: '',
  password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //state
  const [formValues, setFormValues] = useState(initialFormValues)

  const error = "";
  //replace with error state

  //helper functions
  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Clicked")
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form>
          
          <label>
            <input 
              type='text'
              name='username'
              placeholder='Username'
              id='username'
              value={formValues.username}
              onChange={changeHandler}
            /> 
          </label>

          <label>
            <input 
              type='password'
              placeholder='Password'
              name='password'
              id='password'
              value={formValues.password}
              onChange={changeHandler}
            /> 
          </label>

        </form>

        <button id='submit' onClick={submitHandler}>Login</button>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"