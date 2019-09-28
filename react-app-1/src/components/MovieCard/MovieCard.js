import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
    return (
        <div className="card" onClick={props.shuffle}>
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default MovieCard;