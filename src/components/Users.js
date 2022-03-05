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
                Username: <input type="text" onChange={handleUsername}></input>
                Password:{" "}
                <input type="password" onChange={handlePassword}></input>
                <input type="submit"></input>
            </form>
        </section>)
        : (<section className="SignUp Banner">
            <h1>Create an Account</h1>
            <form id="sign-up" onSubmit={handleUserSubmit}>
                Username: <input type="text" onChange={handleUsername}></input>
                Password:{" "}
                <input type="password" onChange={handlePassword}></input>
                <input type="submit"></input>
            </form>
        </section>)
};

export default Users;
