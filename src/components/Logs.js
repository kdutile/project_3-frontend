import "./Logs.css";
import { useState } from "react";


const Logs = (props) => {

    const [showAll, setShowAll] = useState(false);
    const [displayLogs, setDisplayLogs] = useState(props.allLogs.filter(log => props.currentUser.username === log.user));

    const shownLogs = [];

    const showAllToggler = () => {
      if (showAll) {
        setShowAll(false);
        setDisplayLogs(props.allLogs.filter(log => props.currentUser.username === log.user));
      } else {
        setShowAll(true);
        setDisplayLogs(props.allLogs);
      }
    }

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
