import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Add from "./components/Add";
import Logs from "./components/Logs";
import Detail from "./components/Detail";
import Users from "./components/Users";

const App = () => {
    const [allLogs, setAllLogs] = useState(null);
    const [selectedLog, setSelectedLog] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const handleNewUserSubmit = (username, password) => {
        axios
            .post("https://fast-bayou-48719.herokuapp.com/users", {
                username,
                password,
            })
            .then((response) => {
                if (response.data.username) {
                    setCurrentUser(response.data);
                    setShowSignUp(false);
                } else {
                    console.log(response.data);
                    alert("That username is already taken. Please try again");
                }
            });
    };

    const handleUserSignIn = (username, password) => {
        axios
            .put("https://fast-bayou-48719.herokuapp.com/users", {
                username,
                password,
            })
            .then((response) => {
                if (response.data.username) {
                    setCurrentUser(response.data);
                    setShowSignIn(false);
                } else {
                    console.log(response.data);
                    alert("Username and password do not match. Please try again.");
                }
            });
    };

    const toggleSignIn = () => {
      if (showSignIn) {
        setShowSignIn(false);
      } else {
        setShowSignIn(true);
        setShowSignUp(false);
      }
    };

    const toggleSignUp = () => {
      if (showSignUp) {
        setShowSignUp(false);
      } else {
        setShowSignUp(true);
        setShowSignIn(false);
      }

    };

    const clearUser = () => {
        setCurrentUser(null);
    };

    const handleNewLogSubmit = (
        name,
        location,
        description,
        cost,
        image,
        recommendation
    ) => {
        axios
            .post("https://fast-bayou-48719.herokuapp.com/logs", {
                name: name,
                location: location,
                description: description,
                cost: cost,
                image: image,
                recommendation: recommendation,
            })
            .then(() => {
                axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                        setAllLogs(response.data);
                    });
            });
    };

    const handleLogDelete = (log_id) => {
        axios
            .delete(`https://fast-bayou-48719.herokuapp.com/logs/${log_id}`)
            .then((response) => {
                axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                        setAllLogs(response.data);
                    });
            });
    };

    const handleUpdateLog = (
        name,
        location,
        description,
        cost,
        image,
        recommendation,
        id
    ) => {
        axios
            .put(`https://fast-bayou-48719.herokuapp.com/logs/${id}`, {
                name: name,
                location: location,
                description: description,
                cost: cost,
                image: image,
                recommendation: recommendation,
            })
            .then((response) => {
                setSelectedLog(response.data);
                axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                        setAllLogs(response.data);
                    });
            });
    };

    const handleLogSelect = (log) => {
        setSelectedLog(log);
    };

    useEffect(() => {
        axios
            .get("https://fast-bayou-48719.herokuapp.com/logs")
            .then((response) => {
                setAllLogs(response.data);
            });
    }, []);

    return (
        <div className="App">
            <h1>My Travel Experiences</h1>
            <ul>
                {!currentUser ? (
                    <>
                        <li>
                            <button onClick={toggleSignUp}>Sign Up</button>
                        </li>
                        <li>
                            <button onClick={toggleSignIn}>Sign In</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <button onClick={clearUser}>Sign Out</button>
                    </li>
                )}
            </ul>

            {currentUser ? <h2>Welcome {currentUser.username}</h2> : null}

            {showSignUp ? <Users handleNewUserSubmit={handleNewUserSubmit} /> : null}
            {showSignIn ? <Users handleUserSignIn={handleUserSignIn} showSignIn={showSignIn} /> : null}
            {currentUser ? (<>            <Add handleNewLogSubmit={handleNewLogSubmit} />
                        {selectedLog ? (
                            <Detail
                                handleUpdateLog={handleUpdateLog}
                                handleLogDelete={handleLogDelete}
                                selectedLog={selectedLog}
                            />
                        ) : null}
                        {allLogs ? (
                            <Logs allLogs={allLogs} handleLogSelect={handleLogSelect} />
                        ) : null}
</>) : /*This is our landing page*/ null}
        </div>
    );
};

export default App;
