import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
    const [location, setNewLocation] = useState("");
    const [cost, setNewCost] = useState(0);
    const [image, setNewImage] = useState("");
    const [willRecommend, setNewWillRecommend] = useState(false);
    const [allLocations, setAllLocations] = useState(null);

    // const [query, setQuery] = useState(""); for use with searchbar filter
    // testing comment
    const handleNewLocation = (event) => {
        setNewLocation(event.target.value);
    };

    const handleNewCost = (event) => {
        setNewCost(event.target.value);
    };

    const handleNewImage = (event) => {
        setNewImage(event.target.value);
    };
    const handleNewWillRecommend = (event) => {
        setNewWillRecommend(event.target.checked);
    };

    const handleNewLocationFormSubmit = (event) => {
        event.preventDefault(); //this takes off the default actionn that submitting the form does
        // console.log(newDescription);
        // console.log(newComplete);
        axios
            .post("https://fast-bayou-48719.herokuapp.com/locations", {
                location: location,
                cost: cost,
                image: image,
                willRecommend: willRecommend
            })
            .then(() => {
                axios
                    .get("https://fast-bayou-48719.herokuapp.com/locations")
                    .then((response) => {
                        setAllLocations(response.data);
                    });
            });
    };

    useEffect(() => {
        axios.get("https://fast-bayou-48719.herokuapp.com/locations").then((response) => {
            setAllLocations(response.data);
        });
    }, []);

    return (
        <div className="App">
            <h1>Test</h1>
            {allLocations ? <p>Locations: {allLocations[0].location}</p> : null}

            <form onSubmit={handleNewLocationFormSubmit}>
                Location: <input type="text" onChange={handleNewLocation} />
                <br></br>
                Cost: <input type="number" onChange={handleNewCost} />
                <br></br>
                Image Link <input type="text" onChange={handleNewImage} />
                <br></br>
                Do I recommend it?{" "}
                <input type="checkbox" onChange={handleNewWillRecommend} />
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default App;
