import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/NotFound.scss';

const NotFound = () => {
 
    const navigate= useNavigate()
    const handleGoBack= ()=>{
        navigate("./")
    }
    return (
        <div className="NotFound ">
        <img src= "https://th.bing.com/th/id/R.349c2de56f6e04d6ea30bd6c16935f75?rik=G5r5N2ExllmtLA&pid=ImgRaw&r=0"
            alt="Page Not Found" width={500} />
        <h1>ERROR 404</h1>
        <h2>Yo había ponido mi página aquí</h2>
        
        
        <button className="button-404" onClick= {handleGoBack}>Regrese a la página inicial </button>
      
        </div>
        
       
       
        

    );
}

export default NotFound;
