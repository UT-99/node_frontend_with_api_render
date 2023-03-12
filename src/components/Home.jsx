import React from "react";
import "./Home.css";
import Card from "./Card";

const Home = (props) => {
  return (
    <>
      <div className="home_first-flex" key="Home.1">
        <div className="left_flex_div">
          <img
            src="https://images.unsplash.com/photo-1675084184839-bb084eadd9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Error !!!!!" 
            style={{ width: "100%", height: "inherit" }}
            className="borderRaduis"
          />
        </div>
        <div className="right-flex_div" key="Home.2">
          <img
            src="https://images.unsplash.com/photo-1674856320941-7e442d7c4799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Error !!!!!" 
            className="borderRaduis"
          />

          <img
            src="https://images.unsplash.com/photo-1674500021669-27da4b40772a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Error !!!!!" 
            className="borderRaduis"
          />
        </div>
      </div>

      <br />

      <h2 className="theLatest" key="Home.3">
        The Latest
      </h2>
      <hr className="hrLine" />
      <br />

      <div className="flextwo">
        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "bollywood")
            .map((e) => (
              <Card
                url={e.img}
                desc={e.description}
                title={e.title}
                key={e.id}
              />
            ))}
        </div>

        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "technology")
            .map((e) => (
              <Card
                url={e.img}
                desc={e.description}
                title={e.title}
                key={e.id}
              />
            ))}
        </div>

        <div className="flexTwoItmes">
          {props.item
            .filter((e) => e.category === "food")
            .map((e) => (
              <Card
                url={e.img}
                desc={e.description}
                title={e.title}
                key={e.id}
              />
            ))}
        </div>
      </div>

      <div className="flexthree">
        <h2 className=""> Latest Articles</h2>
        <h2 style={{ textAlign: "center" }}> Top Posts</h2>
      </div>

      <div className="thirdDivHomeFlexColumnWiseContainer">
        {props.item
          .filter((e) => e.category === "mix")
          .map((e) => (
            <div className="box_shadow_forImagesLatestpost" key={e.id}>
              <div className="thirdDivHomeFlexColumnWiseItems">
                <img src={e.img} className="borderRaduis imageSize" alt="Error !!!!!" ></img>
                <div>
                  <hr />
                </div>
                <div className="thirdDivHomeFlexColumnWiseItemsSecondPartDiv">
                  <h3>{e.title}</h3>
                  <p className="descriptionForHomePageDiv">
                    {e.description.slice(0, 120)}
                  </p>
                </div>
              </div>
              <hr className="horizontalruleInsideLatestPost" />
              <br />
            </div>
          ))}
      </div>

      <div className="Adverstiments">Adverstisement</div>

      <h2 className="lateststreis">Latest Stories </h2>
      <hr className="hrRule" />
      <div className="latestStoriesFlexContainer">
        {props.item
          .filter((element) => element.category === "footer1")
          .map((ele) => (
            <div className="latestStoriesFlexContainerItmes" key={ele.id}>
              <img src={ele.img} alt="Error !!!!!" className="imageIndiseLateststories" />
              <h4 className="titleForLatestStoreis">{ele.title}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
