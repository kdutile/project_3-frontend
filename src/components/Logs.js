import { useState } from "react";
import "./Logs.css";

const Logs = (props) => {
    return (
        <section>
            <h1>test</h1>
            <div className="cardContainer">
                {props.allLogs.map((log) => {
                    return (
                        <a
                            key={log._id}
                            className="mouseOver"
                            onClick={() => {
                                props.handleLogSelect(log);
                            }}
                        >
                            <section className="cards">
                                <img src={log.image} alt=""></img>

                                <div>
                                    <p>Click for more info</p>
                                </div>
                            </section>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default Logs;
