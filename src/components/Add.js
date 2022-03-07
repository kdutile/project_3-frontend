import { useState } from "react";

const Add = (props) => {
    // Hooks
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState(0);
    const [image, setNewImage] = useState("");
    const [recommendation, setRecommendation] = useState(false);

    // Form event handlers
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

    // Add new log submit, pass state up to App.js
    const handleFormSubmit = (event) => {
        //this takes off the default action that submitting the form does
        event.preventDefault();
        props.handleNewLogSubmit(
            name,
            location,
            description,
            cost,
            image,
            recommendation
        );
        document.getElementById("new_log").reset();
    };

    // Add log render section
      // Add log form
        // Input for name, location, description, cost, image url, and recommendation

    return (
      <section className="addLog block">
        <form id="new_log" className="box" onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" onChange={handleNewName} />
            </div>
          </div>
          <div className="field">
            <label className="label">Location</label>
            <div className="control">
              <input className="input" type="text" onChange={handleNewLocation} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" onChange={handleNewDescription} />
            </div>
          </div>
          <div className="field">
            <label className="label">Cost (USD)</label>
            <div className="control">
              <input className="input" type="number" onChange={handleNewCost} />
            </div>
          </div>
          <div className="field">
            <label className="label">Image URL</label>
            <div className="control">
              <input className="input" type="url" onChange={handleNewImage} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" onChange={handleNewRecommendation} />
                <span className="checkbox-space">Do you recommend this experience?</span>
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="button is-info" type="submit"></input>
            </div>
          </div>
        </form>
      </section>
    );
};

export default Add;
