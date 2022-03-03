import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Add from "./components/Add";
import Logs from "./components/Logs";
import Detail from "./components/Detail";

const App = () => {
    const [allLogs, setAllLogs] = useState(null);
    const [selectedLog, setSelectedLog] = useState(null);

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
            <Add handleNewLogSubmit={handleNewLogSubmit} />
            {selectedLog ? <Detail selectedLog={selectedLog} /> : null}
            {allLogs ? (
                <Logs allLogs={allLogs} handleLogSelect={handleLogSelect} />
            ) : null}
        </div>
    );
};

export default App;
