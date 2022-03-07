import "./Logs.css";
import { useState } from "react";


const Logs = (props) => {

    // Hooks
    const [showAll, setShowAll] = useState(false);
    // Filter all logs, only display logs where user value matches current username
    const [displayLogs, setDisplayLogs] = useState(props.allLogs.filter(log => props.currentUser.username === log.user));

    // Log display toggle
    const showAllToggler = () => {
      // If currently set to show all, toggle to show only user and only display logs where user value matches current username
      if (showAll) {
        setShowAll(false);
        setDisplayLogs(props.allLogs.filter(log => props.currentUser.username === log.user));
      }
      // If currently set to show only user logs, toggle to show all logs
      else {
        setShowAll(true);
        setDisplayLogs(props.allLogs);
      }
    }

    // If Show All selected, display Show All button selected and attach onClick to Only Mine
    // Else display Only Mine selected and attach onClick to Show All
    // Map logs to cards

    return (
        <section className="logsBackground">
            { showAll ? <div className="buttons has-addons">
                          <button className="button" onClick={showAllToggler}>Only Mine</button>
                          <button className="button is-info is-selected">Show All</button>
                        </div>
                      : <div className="buttons has-addons">
                          <button className="button is-info is-selected">Only Mine</button>
                          <button className="button" onClick={showAllToggler}>Show All</button>
                        </div>
            }
            <div className="cardContainer">
                {displayLogs.map((log) => {
                    return (
                        <div
                            key={log._id}
                            className="mouseOver"
                            onClick={() => {
                                props.handleLogSelect(log);
                            }}
                        >
                            <section className="cards">
                                <a href="#anchor">
                                    <img
                                        className="imgFit"
                                        src={log.image}
                                        alt=""
                                    ></img>
                                </a>
                            </section>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Logs;
