import { useParams, useOutletContext } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      <h1>BOOK {id}</h1>  
    </div>
  );
}

export default Book;
