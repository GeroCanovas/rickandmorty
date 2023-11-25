import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <button onClick={() => props.onClose(props.id)}>X</button>
      <h2>Id: {props.id}</h2>
      <h2>{props.name}</h2>
      <h4>{props.status}</h4>
      <h4>{props.gender}</h4>
      <h4>{props.species}</h4>
      <h4>{props.origin}</h4>
     
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt={props.key} />
      </Link>
    </div>
  );
}
