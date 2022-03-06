import { useState } from "react";

const Users = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleUserSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleNewUserSubmit(username, password);
        document.getElementById("sign-up").reset();
    };

    const handleSignInSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleUserSignIn(username, password);
        document.getElementById("sign-in").reset();
    };

    return (props.showSignIn) ? (<section className="SignIn Banner">
            <h1>Sign In</h1>
            <form id="sign-in" onSubmit={handleSignInSubmit}>
              <div class="field">
                <label className="label">Username</label>
                <div class="control">
                  <input className="input" type="text" onChange={handleUsername}></input>
                </div>
              </div>
              <div class="field">
                <label className="label">Password</label>
                <div class="control">
                  <input className="input" type="password" onChange={handlePassword}></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input className="button is-info" type="submit"></input>
                </div>
              </div>
            </form>
        </section>)
        : (<section className="SignUp Banner">
            <h1>Create an Account</h1>
            <form id="sign-up" onSubmit={handleUserSubmit}>
            <div class="field">
              <label className="label">Username</label>
              <div class="control">
                <input className="input" type="text" onChange={handleUsername}></input>
              </div>
            </div>
            <div class="field">
              <label className="label">Password</label>
              <div class="control">
                <input className="input" type="password" onChange={handlePassword}></input>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input className="button is-info" type="submit"></input>
              </div>
            </div>
            </form>
        </section>)
};

export default Users;
