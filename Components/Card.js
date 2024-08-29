import { useState } from "react";

/* N-O-T-E:- Why Use Destructuring When Using the Spread Operator?

Spread Operator in Parent Component:

The spread operator is used in the parent component to pass all properties of an object as individual props to the child component. This is a convenient way to pass a large number of props without explicitly listing each one.

Destructuring in Child Component:

Destructuring in the child component's function signature makes it easier to access these props. Instead of writing props.id, props.image, props.price, etc., you can directly use id, image, price, etc.
This improves readability and makes the code cleaner, especially when you have multiple props.

Combining Both for Efficiency
In the Parent Component: Using the spread operator keeps the code concise and avoids repetition.
In the Child Component: Destructuring allows you to directly access the props without needing to repeatedly reference props.
*/

function Card({ id, image, info, price, name, removeTour, showFullScreen ,isFullScreen}) {
    const [readmore, setReadmore] = useState(false);

    // Ensure `info` is defined before using it
    const description = readmore ? info : `${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
            </div>

            <div className="description">
                {description}
                {info && (
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                )}
            </div>

           {!isFullScreen && <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>}

            {!isFullScreen && <button onClick={() => showFullScreen(id)} className="btn-green">Interested</button>} 
        </div>
    );
}

export default Card;
