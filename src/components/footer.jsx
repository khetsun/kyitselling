import React from "react";

function Footer(){
    var currentYear = new Date().getFullYear
    return(
        <div className="footer_main">
        <div className="footer_logo">
        <a href=""><i class="fab fa-facebook fa-2x"></i></a>
        <a href=""><i class="fab fa-twitter fa-2x"></i></a>
        <a href=""><i class="fab fa-youtube fa-2x"></i></a>
        </div>
        <footer>Kyitsel-ling © 2021</footer>
        </div>
    ) 
}
export default Footer;