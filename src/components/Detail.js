import { useState } from "react";

const Detail = (props) => {
    return (
        <section className="log-details">
            <h2>Travel Experience Details</h2>
            <ul>
                <li>{props.selectedLog.name}</li>
                <li>{props.selectedLog.location}</li>
                <li>{props.selectedLog.description}</li>
                <li>${props.selectedLog.cost}</li>
                <li>
                    <img src={props.selectedLog.image} />
                </li>
                <li>{props.selectedLog.recommendation}</li>
            </ul>
        </section>
    );
};

export default Detail;
