import "./Logs.css";

const Logs = (props) => {
    return (
        <section className="logsBackground">
            {/* <h1>test</h1> */}
            <div className="cardContainer">
                {props.allLogs.map((log) => {
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
