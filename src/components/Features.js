import React from "react";
import { Link, Outlet } from "react-router-dom";

function Features() {
  return (
    <div>
      <h2>Features</h2>
      <Link to={"/Features/1"}>IDFEATURE1</Link>
      <br />
      <Link to={"/Features/4"}>IDFEATURE2</Link>
      <Outlet context={{ hello: "world" }} />
    </div>
  );
}

export default Features;
