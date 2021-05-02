import React from "react";
import "./DetailCard.css";

const DetailCard = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    );
};

export default DetailCard;