import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ url, desc, title }) => {
  return (
    <>
      <Link to="/OnClickOfImage" state={{ src: url, description: desc }}>
        <div className="flex">
          <img src={url} alt="" className="image" />
          <br />
          <h3 className="titleIkmage">{title}</h3>
          {/* <p> {desc}</p> */}
        </div>
      </Link>
    </>
  );
};

export default Card;
