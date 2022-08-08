import React from "react";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Pricing</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back HOME
      </button>
    </div>
  );
}

export default Pricing;
