import { useState, useEffect } from "react";

const Detail = (props) => {
    // Hooks
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

    // Handle form events
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

    // Handle edit form submit, pass state up to App.js
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
        toggleEdit();
    };

    // Clear log selected state so display window closes, pass state up to App.js
    const closeSelected = () => {
        props.handleLogSelectClear();
    };

    // Toggle edit view
    const toggleEdit = () => {
        if (editLog) {
            setEditLog(false);
        } else {
            setEditLog(true);
        }
    };

    // Upon Edit button select, update states and toggle edit view
    const editSelected = () => {
        setName(props.selectedLog.name);
        setLocation(props.selectedLog.location);
        setDescription(props.selectedLog.description);
        setCost(props.selectedLog.cost);
        setNewImage(props.selectedLog.image);
        setRecommendation(props.selectedLog.recommendation);
        toggleEdit();
    };

    // Handle log delete, pass state to App.js
    const handleLogDelete = (event) => {
        props.handleLogDelete(props.selectedLog._id);
    };

    // If Edit Log selected, display log form
    // Loads current states as values
    // If checkbox display
    // Else display selected log
    // If current user is log owner, then display Edit/Delete buttons
    // Else display mention to log owner and close button

    return editLog ? (
        <section className="editBanner editLog block">
            <form id="update_log" className="box" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={handleNewName}
                            value={name}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Location</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={handleNewLocation}
                            value={location}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            onChange={handleNewDescription}
                            value={description}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Cost (USD)</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            onChange={handleNewCost}
                            value={cost}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image URL</label>
                    <div className="control">
                        <input
                            className="input"
                            type="url"
                            onChange={handleNewImage}
                            value={image}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            {recommendation ? (
                                <input
                                    type="checkbox"
                                    onChange={handleNewRecommendation}
                                    checked
                                />
                            ) : (
                                <input
                                    type="checkbox"
                                    onChange={handleNewRecommendation}
                                />
                            )}
                            <span className="checkbox-space">
                                Do you recommend this experience?
                            </span>
                        </label>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <input className="button is-info" type="submit"></input>
                    </div>
                    <div className="control">
                        <input
                            type="button"
                            className="button is-warning"
                            value="Cancel"
                            onClick={toggleEdit}
                        ></input>
                    </div>
                </div>
            </form>
        </section>
    ) : (
        <section id="anchor" className="detailsBanner logDetails block">
            <article className="media box">
                <div className="media-left">
                    <figure className="image ">
                        <img src={props.selectedLog.image} alt="Image" />
                    </figure>
                </div>

                <div className="media-content">
                    <div className="content">
                        <h2>{props.selectedLog.name}</h2>
                        <h4>Location:</h4>
                        <p>{props.selectedLog.location}</p>
                        <h4>Description:</h4>
                        <p>{props.selectedLog.description}</p>
                        <span>
                            <strong>Cost: </strong>
                        </span>
                        <span>${props.selectedLog.cost}</span>
                        <p>{props.selectedLog.recommendation}</p>

                        {props.selectedLog.user ===
                        props.currentUser.username ? (
                            <div className="field is-grouped">
                                <div className="control">
                                    <button
                                        className="button"
                                        onClick={closeSelected}
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="control">
                                    <button
                                        className="button is-success"
                                        onClick={editSelected}
                                    >
                                        EDIT
                                    </button>
                                </div>
                                <div className="control">
                                    <button
                                        className="button is-danger"
                                        onClick={handleLogDelete}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p>Experience by {props.selectedLog.user}</p>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button
                                            className="button"
                                            onClick={closeSelected}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Detail;
