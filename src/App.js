import { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import Add from "./components/Add";
import Logs from "./components/Logs";
import Detail from "./components/Detail";
import Users from "./components/Users";
import "./App.css";

const App = () => {
    const [allLogs, setAllLogs] = useState(null);
    const [selectedLog, setSelectedLog] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const handleNewUserSubmit = (username, password) => {
        axios
            .post("https://fast-bayou-48719.herokuapp.com/users", {
                username,
                password,
            })
            .then((response) => {
                if (response.data.username) {
                  axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                      setAllLogs(response.data);
                      }
                    );
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
                  axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                      setAllLogs(response.data);
                      }
                    );
                  setCurrentUser(response.data);
                  setShowSignIn(false);
                } else {
                    console.log(response.data);
                    alert(
                        "Username and password do not match. Please try again."
                    );
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

    const toggleAdd = () => {
        if (showAdd) {
            setShowAdd(false);
        } else {
            setShowAdd(true);
        }
    };

    const clearUser = () => {
      setSelectedLog(null);
      setCurrentUser(null);
      setShowSignUp(false);
      setShowSignIn(false);
      setShowAdd(false);
    };

    const handleNewLogSubmit = (
        name,
        location,
        description,
        cost,
        image,
        recommendation
    ) => {
      console.log(currentUser.username);
        // default image if user doesn't add one
        if (image === "") {
          image = "https://www.publicdomainpictures.net/pictures/50000/nahled/silhouette-globe.jpg"
        }
        axios
            .post("https://fast-bayou-48719.herokuapp.com/logs", {
                name: name,
                location: location,
                description: description,
                cost: cost,
                image: image,
                recommendation: recommendation,
                user: currentUser.username
            })
            .then(() => {
                axios
                    .get("https://fast-bayou-48719.herokuapp.com/logs")
                    .then((response) => {
                        setAllLogs(response.data);
                        setShowAdd(false);
                    });
            });
    };

    const handleLogDelete = (log_id) => {
        setSelectedLog(null);
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
                user: currentUser.username
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
          <section className="appHeader">
            <h1 className="title is-2">My Travel Experiences</h1>
            <nav>
              <ul>
                {!currentUser ? (
                  <>
                    <li>
                      <button className="button is-primary" onClick={toggleSignUp}>Sign Up</button>
                    </li>
                    <li>
                      <button className="button is-primary is-outlined" onClick={toggleSignIn}>Sign In</button>
                    </li>
                  </>
                ) : (
                  <>
                    { showAdd ? (
                      <li>
                        <button className="button is-warning" onClick={toggleAdd}>Cancel Log</button>
                      </li>
                    ) : (
                      <li>
                        <button className="button button is-success" onClick={toggleAdd}>Add Log</button>
                      </li>
                    )
                    }
                    <li>
                      <button className="button is-danger is-outlined" onClick={clearUser}>Sign Out</button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </section>
          <section className="appBody">
            {currentUser ? <h2 className="userGreeting">Welcome {currentUser.username}</h2> : null}

            {showSignUp ? (
                <Users handleNewUserSubmit={handleNewUserSubmit} />
            ) : null}
            {showSignIn ? (
                <Users
                    handleUserSignIn={handleUserSignIn}
                    showSignIn={showSignIn}
                />
            ) : null}
            { currentUser ?
              (
                <>
                  { showAdd ? <Add handleNewLogSubmit={handleNewLogSubmit} /> : null }
                  { selectedLog ?
                    (
                      <Detail
                        handleUpdateLog={handleUpdateLog}
                        handleLogDelete={handleLogDelete}
                        selectedLog={selectedLog}
                      />
                    ) : null
                  }
                  { allLogs ?
                    (
                      <Logs
                        allLogs={allLogs}
                        handleLogSelect={handleLogSelect}
                      />
                    ) : null
                  }
                </>
              ) : (showSignUp || showSignIn) ? null : <LandingPage />
            }
        </section>
      </div>
    );
};

export default App;
