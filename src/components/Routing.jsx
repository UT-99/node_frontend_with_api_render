import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Food from "./Food";
import OnClick from "./OnClick";

const Routing = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home item={props.array} />}></Route>
        <Route
          path="/bollywood"
          element={<Bollywood item={props.array} />}
        ></Route>
        <Route
          path="/hollywood"
          element={<Hollywood item={props.array} />}
        ></Route>
        <Route
          path="/Technology"
          element={<Technology item={props.array} />}
        ></Route>
        <Route path="/Food" element={<Food item={props.array} />}></Route>
        <Route path="/Fitness" element={<Fitness item={props.array} />}></Route>
        <Route path="/OnClickOfImage" element={<OnClick />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
