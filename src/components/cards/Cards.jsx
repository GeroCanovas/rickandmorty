import Card from '../card/Card';
import "./cards.css"
export default function Cards({ characters, onClose }) {
   return (    
   <div class = "cards">
      {
         characters.map((character,index) =>{
            return  <Card
            key ={index} 
            id = {character.id}
            name = {character.name}
            image = {character.image}
            status = {character.status}
            genero = {character.genero}
            species = {character.species}
            origin = {character.origin.name}
            onClose={onClose}

            />
         })
      }
   </div>
)}
