import React from "react";
import Navbar from "./navbar";
function Body(){
    return(
     <div className="body_main">
     <Navbar/>
     <div className="headings">
     <h1>Welcome to<em classname="logo"> Kyitsel-Ling</em></h1>
     <p>Kyitsel-ling is a charitable undertaking of the Tibetan Children’s Educational and Charitable Society(TCECS). The founding members of the society believe that apart from the dedicated efforts of the Central Tibetan Administration, Dharamsala, individual Tibetans need to play an active role in the education of our children. We are located in the Tibetan settlement at Clement Town, Dehra Dun..Thank you.</p>
     <a className="know_more"href="#">Know more...</a>
     </div>
     </div>
    )
}
export default Body;