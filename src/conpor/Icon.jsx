import React from "react";
import "./Icon.css";

function Icon() {
    return (
      <div>
        <div className="BlackGG">
        <div><img className='choet' src="https://i.imgur.com/ORWYyPr.png" alt="9Choet Logo" onError={(e) => { e.target.style.display = 'none'; }}></img></div> 
        </div>
      </div>
    );
  }
  
  export default Icon;
  
