import React, { useState } from "react";
// Importing data.js which contains an array of objects
import data from "./data";

// Importing Tours component
import Tours from "./Components/Tours";

const App = () => {
    // Using useState to initialize a variable 'tours' with the 'data' array from data.js
    const [tours, setTours] = useState(data);
    // Using useState to intialise a variable 'selectedTour' with intial value=null.This variable will be set with id of a specific tour when Intersted button is clicked.
    const [selectedTour, setSelectedTour] = useState(null);

    
    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        // Updating tour list on UI
        setTours(newTours);
    }
  //  defining  function showFullScreen which is used to display the selected 'intersted' tour on full screen.
    function showFullScreen(id){
    
      // Here we are updating the selectedTour variable with an id of a tour.The id is determined in Tours.js component.
        setSelectedTour(id);
    };

    if (tours.length === 0) {
        return (
            <div className="refresh">
                <h2>No Tours Left</h2>
                <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
            </div>
        );
    }

    return (
        // Top Level Div
        <div className="App">
        {/* Here as a prop,we are passing the variable selectedTour and function showFullScreen as well. */}
            <Tours tours={tours} removeTour={removeTour} showFullScreen={showFullScreen} selectedTour={selectedTour} />
        </div>
        // Top Level Div Ends Here
    );
};

export default App;
