import React from "react";

function FeaturesIDfirst() {
  const { id } = useParams();
  return (
    <div>
      <h3>ID2 - {id}</h3>
    </div>
  );
}

export default FeaturesIDfirst;
