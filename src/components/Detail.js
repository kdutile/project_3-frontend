import { useState } from "react";

const Detail = (props) => {
  return (
    <section className="log-details">
      <h2>Travel Experience Details</h2>
      <ul>
        <li>{props.allLogs.name}</li>
        <li>{props.allLogs.location}</li>
        <li>{props.allLogs.description}</li>
        <li>${props.allLogs.cost}</li>
        <li><img src={props.allLogs.image} /></li>
        <li>{props.allLogs.recommendation}</li>
      </ul>
    </section>
  )
};

export default Detail;
