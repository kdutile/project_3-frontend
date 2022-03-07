import { useState } from "react";

const Users = (props) => {
    // Hooks
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    //Event handlers
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // Handle new user submit, pass state up to App.js
    const handleUserSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleNewUserSubmit(username, password);
        document.getElementById("sign-up").reset();
    };

    // Handle user sign in, pass state up to App.js
    const handleSignInSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleUserSignIn(username, password);
        document.getElementById("sign-in").reset();
    };

    // If showSignIn, display sign in form (user same banner CSS as landing page)
      // Takes username and password
    // Else display sign up form (use same banner CSS as landing page)
      // Takes username and password

    return (props.showSignIn) ? (<section className="SignIn Banner">
            <h1>Sign In</h1>
            <form id="sign-in" onSubmit={handleSignInSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input className="input" type="text" onChange={handleUsername}></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" onChange={handlePassword}></input>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="button is-info" type="submit"></input>
                </div>
              </div>
            </form>
        </section>)
        : (<section className="SignUp Banner">
            <h1>Create an Account</h1>
            <form id="sign-up" onSubmit={handleUserSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" onChange={handleUsername}></input>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" onChange={handlePassword}></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="button is-info" type="submit"></input>
              </div>
            </div>
            </form>
        </section>)
};

export default Users;
