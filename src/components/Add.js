import { useState } from "react";
import axios from "axios";

const Add = (props) => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  const [image, setNewImage] = useState([]);
  const [recommendation, setRecommendation] = useState(false);


  const handleNewname = (event) => {
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
    props.handleNewLogSubmit(name, location, description, cost, image, recommendation);
  }


  return (
    <form onSubmit={handleFormSubmit}>
      Name: <input type="text" onChange={handleNewName} />
      <br></br>
      Location: <input type="text" onChange={handleNewLocation} />
      <br></br>
      Description: <input type="text" onChange={handleNewDescription} />
      <br></br>
      Cost: <input type="number" onChange={handleNewCost} />
      <br></br>
      Image Links: <input type="text" onChange={handleNewImage} />
      <br></br>
      Do I recommend it? <input type="checkbox" onChange={handleNewRecommendation} />
      <br></br>
      <input type="submit"></input>
    </form>
  )
}

export default Add
