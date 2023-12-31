import React, {useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function Detail(props) {
  const { id } = useParams();
  const [ character, setCharacter ] = useState({});
  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/${id}?`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detail</h1>     
      <hr/>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>{character.status}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.species}</h3>
      <h3>{character.origin?.name}</h3>
    
    </div>
  );
}
