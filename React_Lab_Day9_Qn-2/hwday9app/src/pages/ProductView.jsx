import { useParams } from "react-router-dom";

function Productview() {
  const { id } = useParams();
    return <div>Product ID: {id}</div>;   
}

export default Productview;
