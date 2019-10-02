import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
    const { id } = props;
    return (
        <div className="card" onClick={() => props.shuffle(id)}>
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