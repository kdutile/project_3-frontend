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

    return (
        <section className="SignUp">
            <h1>Create an Account</h1>
            <form id="sign-up" onSubmit={handleUserSubmit}>
                Username: <input type="text" onChange={handleUsername}></input>
                Password:{" "}
                <input type="password" onChange={handlePassword}></input>
                <input type="submit"></input>
            </form>
        </section>
    );
};

export default Users;
