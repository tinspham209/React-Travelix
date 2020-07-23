import React from "react";
import "./Room.css";

const Room = (props) => {
  const { roomName, roomPrice, roomDescription, imgSource, imgAlt } = props;
  return (
    <div className="grid-item featured-rooms">
      <div className="image-wrap">
        <img src={imgSource} alt={imgAlt} className="room-image" />
        <h5 className="room-name">{roomName}</h5>
      </div>
      <div className="room-info-wrap">
        <span className="room-price">
          ${Number(roomPrice)} <span className="per-night">Per night</span>
        </span>
        <p className="paragraph">{roomDescription}</p>
        <a
          href="https://github.com/tinspham209/React-Travelix"
          className="btn rooms-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default Room;
