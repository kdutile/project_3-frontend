import { useState, useEffect } from "react";

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
        toggleEdit();
    };

    const toggleEdit = () => {
        if (editLog) {
          setEditLog(false);
        } else {
          setEditLog(true);
        }
    };

    const editSelected = () => {
      setName(props.selectedLog.name);
      setLocation(props.selectedLog.location);
      setDescription(props.selectedLog.description);
      setCost(props.selectedLog.cost);
      setNewImage(props.selectedLog.image);
      setRecommendation(props.selectedLog.recommendation);
      toggleEdit();
    }

    return editLog ? (
        <section className="editLog block">
          <form id="update_log" className="box" onSubmit={handleFormSubmit}>
            <div class="field">
              <label className="label">Name</label>
              <div class="control">
                <input className="input" type="text" onChange={handleNewName} value={name}/>
              </div>
            </div>
            <div class="field">
              <label className="label">Location</label>
              <div class="control">
                <input className="input" type="text" onChange={handleNewLocation} value={location}/>
              </div>
            </div>
            <div class="field">
              <label className="label">Description</label>
              <div class="control">
                <textarea className="textarea" onChange={handleNewDescription} value={description}/>
              </div>
            </div>
            <div class="field">
              <label className="label">Cost (USD)</label>
              <div class="control">
                <input className="input" type="number" onChange={handleNewCost} value={cost}/>
              </div>
            </div>
            <div class="field">
              <label className="label">Image URL</label>
              <div class="control">
                <input className="input" type="url" onChange={handleNewImage} value={image}/>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label className="checkbox">
                  {recommendation ? <input type="checkbox" onChange={handleNewRecommendation} checked /> : <input type="checkbox" onChange={handleNewRecommendation} />}
                  <span className="checkbox-space">Do you recommend this experience?</span>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <input className="button is-info" type="submit"></input>
              </div>
              <div class="control">
                <input type="button" className="button is-warning" value="Cancel" onClick={toggleEdit}></input>
              </div>
            </div>
          </form>
        </section>
    ) : (
        <section id="anchor" className="logDetails block">
          <article className="media box">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={props.selectedLog.image} alt="Image"/>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h2>{props.selectedLog.name}</h2>
                <p>{props.selectedLog.name}</p>
                <p>{props.selectedLog.location}</p>
                <p>{props.selectedLog.description}</p>
                <p>${props.selectedLog.cost}</p>
                <p>{props.selectedLog.recommendation}</p>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button className="button is-success" onClick={editSelected}>EDIT</button>
                </div>
                <div class="control">
                  <button className="button is-danger" onClick={() => {props.handleLogDelete(props.selectedLog._id);}}>DELETE</button>
                </div>
              </div>
            </div>
          </article>
        </section>
    );
};

export default Detail;
