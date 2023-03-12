import React from "react";
import "./OnClick.css";
import CardCategoryWise from "./CardCategoryWise";
import "./Bollywood.css";
import "./CardCategory.css";
import CardRight from "./CardRight";
import { useState, useEffect } from "react";

const Technology = (props) => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch("https://node-backendapi.onrender.com/technology")
      .then((res) => res.json())
      .then((res) => setDetail(res));
  }, []);
  console.log(detail);
  const bollywoodFilms = [...detail];

  return (
    <div>
      <h2 className="BoolywoodMovies_Heading">Technology </h2>
      <hr className="RedLineDiv" />
      <br />

      <div className="bollywoodDisplyayContainer">
        <div className="mainDivForAnyCategoryContainerItemsLeft">
          {bollywoodFilms.map((ele) => (
            <CardCategoryWise
              key={ele.id}
              img={ele.img}
              title={ele.title}
              desc={ele.description.slice(0, 134)}
              cate={ele.category}
            />
          ))}
        </div>

        <div className="mainDivForAnyCategoryContainerItemsRight">
          <h2>Top Posts </h2>
          <div>
            <hr className="topmostHrRule" />
          </div>

          {bollywoodFilms.map((ele) => (
            <CardRight
              key={ele.id}
              img={ele.img}
              title={ele.title}
              desc={ele.description.slice(0, 134)}
              cate={ele.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
