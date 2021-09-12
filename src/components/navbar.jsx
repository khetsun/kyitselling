import React from "react";
function Navbar(){
    return(
       <div className="navbar_main">
         <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><div className="logo"><h4>Kyitsel-Ling</h4></div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Programs for Children</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    More
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

       </div>
    )
}
export default Navbar;