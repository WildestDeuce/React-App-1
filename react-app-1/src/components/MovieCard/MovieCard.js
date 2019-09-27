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
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Image:</strong> {props.image}
                    </li>
                    <li>
                        <strong>Movie:</strong> {props.movie}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MovieCard;