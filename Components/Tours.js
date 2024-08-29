import Card from "./Card";

// By passing prop parameters as {tours},{removeTour} etc,we ensure thier direct use in function rather than using {props.tours} etc,we can use tours directly now.
function Tours({ tours, removeTour, showFullScreen, selectedTour }) {
    // SelecetedTour represents the specific id passed from App.js of a particular tour
    // If selected tour is not null, find the tour that matches the selected tour and store in a variable 'tour'.'t' here represents each tour object in 'tours' variable
    if (selectedTour !== null) {
        const tour = tours.find(t => t.id === selectedTour);
        return (
          // displaying the specific tour on entire screen
            <div className="wrapper">
                {/* Passing 'tour' object using spread operator.It passes all the properties of the object as individual props to the component. This is shorthand for passing each property individually.It is equivalent to passing the objet as:
                          
                          <Card id={tour.id} name={tour.name} price={tour.price} info={tour.info}></Card>
                        By passing object using spread operator,we can use each property directly in Card component.

                          isFullScreen is passed with 'true' value showing 'tour' is shown in full screen mode.The 'Interested' and 'Not Interested' button will be only visible when isFullScreen is False i:e a specific tour is not being displayed on entire screen.
 */}
                <Card {...tour} removeTour={removeTour} showFullScreen={showFullScreen} isFullScreen={true}/>
                <button onClick={() => showFullScreen(null)} className="btn-back">Back</button>
            </div>
        );
    }

    return (
        <div className="wrapper">
            {/* -----HEADING---- */}
            <div>
                <h2 className="title">Plan With Wajahat</h2>
            </div>

            {/* div for Cards */}
            <div className="cards">
            {/* Here we are dealing the case when slectedTour varaiable is null,means Intersted button not clicked,so we need to display all buttons(Intersted and Not Intersted),thus isFullScreen is passed with FALSE value. */}
                {tours.map(tour => (
                  
                    <Card key={tour.id} {...tour} removeTour={removeTour} showFullScreen={showFullScreen} isFullScreen={false} />
                ))}
            </div>
        </div>
    );
}

export default Tours;
