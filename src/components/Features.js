import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div>
      <h2>Features</h2>
      <Link to={"/Features/1"}>IDFEATURE1</Link>
      <br />
      <Link to={"/Features/2"}>IDFEATURE2</Link>
    </div>
  );
}

export default Features;
