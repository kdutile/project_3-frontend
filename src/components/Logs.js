import "./Logs.css";

const Logs = (props) => {
    return (
        <section>
            <h1>test</h1>
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
                                <img
                                    className="imgFit"
                                    src={log.image}
                                    alt=""
                                ></img>
                            </section>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Logs;
