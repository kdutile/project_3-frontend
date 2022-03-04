import { useState } from "react";

const Detail = (props) => {
    const [editLog, setEditLog] = useState(false);

    const [name, setName] = useState(props.selectedLog.name);
    const [location, setLocation] = useState(props.selectedLog.location);
    const [description, setDescription] = useState(
        props.selectedLog.description
    );
    const [cost, setCost] = useState(props.selectedLog.cost);
    const [image, setNewImage] = useState(props.selectedLog.image);
    const [recommendation, setRecommendation] = useState(
        props.selectedLog.recommendation
    );

    const handleNewName = (event) => {
        setName(event.target.value);
    };
    const handleNewLocation = (event) => {
        setLocation(event.target.value);
    };
    const handleNewDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleNewCost = (event) => {
        setCost(event.target.value);
    };
    const handleNewImage = (event) => {
        setNewImage(event.target.value);
    };
    const handleNewRecommendation = (event) => {
        setRecommendation(event.target.checked);
    };

    const handleFormSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleUpdateLog(
            name,
            location,
            description,
            cost,
            image,
            recommendation,
            props.selectedLog._id
        );
        setEditLog(false);
    };

    const handleEdit = () => {
        setEditLog(true);
    };

    return editLog ? (
        <section className="log-Edit">
            <form id="update_log" onSubmit={handleFormSubmit}>
                Name:{" "}
                <input type="text" onChange={handleNewName} value={name} />
                <br></br>
                Location:{" "}
                <input
                    type="text"
                    onChange={handleNewLocation}
                    value={location}
                />
                <br></br>
                Description:{" "}
                <input
                    type="text"
                    onChange={handleNewDescription}
                    value={description}
                />
                <br></br>
                Cost:{" "}
                <input type="number" onChange={handleNewCost} value={cost} />
                <br></br>
                Image Links:{" "}
                <input type="text" onChange={handleNewImage} value={image} />
                <br></br>
                Do I recommend it?{" "}
                <input
                    type="checkbox"
                    onChange={handleNewRecommendation}
                    value={recommendation}
                />
                <br></br>
                <input type="submit"></input>
            </form>
        </section>
    ) : (
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

            <button onClick={handleEdit}>EDIT</button>

            <button
                onClick={() => {
                    props.handleLogDelete(props.selectedLog._id);
                }}
            >
                DELETE
            </button>
        </section>
    );
};

export default Detail;
