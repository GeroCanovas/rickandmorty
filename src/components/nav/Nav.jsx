import SearchBar from "../searchbar/SearchBar";
import './nav.css'
import { Link } from "react-router-dom";



export default function Nav(props){
    return (  
        <div className="nav">
        <SearchBar onSearch={props.onSearch}/>

        <Link to="home">
        <button>Home</button>
        </Link>
        <Link to="about"> 
        <button>About</button>
        </Link>




       
        
        </div>
    );
 }
