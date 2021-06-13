import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoqSue penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.{" "}
        </p>

        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
