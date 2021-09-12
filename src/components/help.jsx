import React from "react";
import plantingtrees from "./images/plantingtrees.jpg"
function Help (){
      return(  
        <div className="help_main">
        <div className="component">
        <div className="row">
        <div className="col-md-6">
        <div className="help_heading">
            <h1>How can you help?</h1>
        </div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        <div className="col-md-6 pic-content">
         <img className="plant_image"src={plantingtrees} alt="image here"/>
        </div>
        </div>
        </div>
        </div>
        )
    
}
export default Help;