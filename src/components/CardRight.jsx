import React from "react";
import "./CardRight.css";
import "./Overall.css";
import { Link } from "react-router-dom";
const CardRight = ({ img, title, desc, cate }) => {
  return (
    <>
      <Link
        className="text_decoration"
        to="/OnClickOfImage"
        state={{
          imgageUrl: img,
          imagetitle: title,
          imageDescription: desc,
          category: cate,
        }}
      >
        {/* <div className="mainDivForAnyCategoryContainer">
          <div className="mainDivForAnyCategoryContainerItemsLeft">
            <div>
              <img src={img} alt="" className="imageSize" />
            </div>
            <div>
              <h3 className="TitleForEachMovies">{title}</h3>
              <p className="descriptionforeachmovie">{desc}</p>
            </div>
          </div>

          
        </div> */}
        <div className="outermainDivForAnyCategoryContainerCardRight">
          <div
            className="mainDivForAnyCategoryContainerCardRight"
            title="Click Here to read full article"
          >
            <div>
              <img src={img} alt="" className="imageSizeCardright" />
            </div>
            <div className="flexColumnForEachCard">
              <p
                className="TitleForEachMoviesForCard"
                title="Click Here To Read full article"
              >
                {title}
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Link>
    </>
  );
};

export default CardRight;
