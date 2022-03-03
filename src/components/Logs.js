import { appendChild } from "parse5/lib/tree-adapters/default";
import { useState } from "react";
import "./Logs.css";

const Logs = (props) => {
    return <img src={props.allLogs[3].image}></img>;
};

export default Logs;
