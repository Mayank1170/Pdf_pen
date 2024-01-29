// ColorStrip.js
import React from "react";
import "./ColorStrip.css";

const ColorStrip = () => {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  
  
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
   
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  
  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 8 + "px";
      circle.style.top = y - 0 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
       
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
  

  return (
    <div>
      <button
        className="rounded-xl bg-blue-600 w-fit px-6 py-2 text-white"
        // onClick={toggleColorStrip}
      >
        Start Color Strip
      </button>
  <div class="circle"></div> 
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div> 
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div> 
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div> 
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
    </div>  
  );
};

export default ColorStrip;
