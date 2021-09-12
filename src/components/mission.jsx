import { right } from "@popperjs/core";
import React from "react";
import yogateacher from "./images/yogateacher.jpeg";

function Mission(){
    return(
     <div className="mission_main">
         <div className="heading">
         <div className="container">
         <div className="row">
         <div className="col-md-6 img-column">
         <img className="image" src={yogateacher} alt="IMAGE HERE"/>
         </div>
         <div className="col-md-6">
         <h1>Our Mission</h1>
         <div className="info">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Id leo in vitae turpis. Et tortor consequat id porta nibh venenatis. Morbi quis commodo odio aenean. Erat pellentesque adipiscing commodo elit at imperdiet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Feugiat nisl pretium fusce id velit ut tortor pretium. Euismod in pellentesque massa placerat duis ultricies lacus. Massa massa ultricies mi quis hendrerit dolor. Mi tempus imperdiet nulla malesuada pellentesque elit eget. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Adipiscing commodo elit at imperdiet dui.
         </p>
         </div>
         </div>
         </div>
         </div>
         </div>          
     </div>

    )
}
export default Mission;