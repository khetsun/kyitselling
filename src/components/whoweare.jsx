import React from "react";
import dancing2 from "./images/dancing2.JPG";
import yoga1 from "./images/yoga1.jpeg";
function Whoweare(){
    return(
      <div className="who_main">
        <div className="container">
         <div className="row">
        <div className="col-md-6">
        <h1 >Who we are</h1>
        <p>Kyitsel-ling is a boarding educational hostel for Tibetan and needy children. The children in our care live at Kyitsel-ling and attend school at Tibetan Nehru Memorial Foundation School (TNMFS) – a senior secondary Tibetan school run by the local Tibetan settlement at Clement Town, N India. Kyitsel-ing provides a nurturing environment and several educational resources to supplement the education provided by TNMFS.</p>
        </div>
        <div className="col-md-6">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img src={dancing2} class="d-block w-100" alt="not available"/>
               </div>
            <div class="carousel-item">
              <img src={yoga1} class="d-block w-100" alt="..."/>
           </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
           </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        </div>
        
        
      </div>
    )
}
export default Whoweare;