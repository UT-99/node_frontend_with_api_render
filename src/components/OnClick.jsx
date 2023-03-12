import React, { useState } from "react";
import "./OnClick.css";
import "./Overall.css";
import { Link, useLocation } from "react-router-dom";

const OnClick = () => {
  const prop = useLocation();
  const imagesrc = prop.state.imgageUrl;
  const imageDscription = prop.state.imageDescription.slice(0, 160);
  const imagetitle = prop.state.imagetitle;
  const category = prop.state.category;

  const [button, setButton] = useState(true);
  const [state, setState] = useState("Explore more " + category + "");

  const [homeButton, setHomeButton] = useState(true);
  const [statehomeButton, setHomeButtonState] = useState(
    "To Explore other category"
  );

  function hoverHandler() {
    setState("Click Here");
    setButton(!button);
  }

  function homebuttonhoverHandler() {
    setHomeButtonState("Click Here");
    setHomeButton(!homeButton);
  }
  return (
    <>
      <center>
        <div className="flex align">
          <h2>{imagetitle}</h2>
          <img src={imagesrc} alt="" className="imageSizeOnCLick" />
          <p>{imageDscription}</p>
        </div>

        <Link to={"/" + category}>
          {/* <button title={"Explore more " + category + " movies"} className="button" onMouseOver={hoverHandler}>
            Go back
        
          </button> */}

          {button ? (
            <button
              title={"Explore more in " + category + " "}
              className="button"
              onMouseOver={hoverHandler}
            >
              {state}
            </button>
          ) : (
            <button
              title={"Explore more in " + category + "."}
              className="button"
              onMouseOver={hoverHandler}
            >
              {state}
            </button>
          )}
        </Link>
        <pre> </pre>
        <Link to="/">
          {homeButton ? (
            <button
              title="Click Here to go home page"
              className="button"
              onMouseOver={homebuttonhoverHandler}
            >
              {statehomeButton}
            </button>
          ) : (
            <button
              title="Click Here to go home page"
              className="button"
              onMouseOver={homebuttonhoverHandler}
            >
              {statehomeButton}
            </button>
          )}
        </Link>
      </center>
    </>
  );
};

export default OnClick;
