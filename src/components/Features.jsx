import React from "react";
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          This Application <span>Software</span>is Art
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.
          <button>View More Features</button>
        </p>
      </div>
    </div>
  );
}

export default Features;
